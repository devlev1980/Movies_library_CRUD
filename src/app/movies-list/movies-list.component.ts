import {Component, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';
import {Movie} from '../models/movie';
import {MatDialog, MatDialogRef} from '@angular/material';
import {AddMovieComponent} from '../dialogs/add-movie/add-movie.component';
import {YesNoComponent} from '../dialogs/yes-no/yes-no.component';
import {EditDialogComponent} from '../dialogs/edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  movies: Movie[];
  searchInput: string;

  constructor(private apiService: ApiService, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.apiService.getMovies().subscribe((movies) => {
      console.log(movies);
      if (movies) {
        this.movies = movies;
      } else {
        console.log('error');
      }

    }, err => {
      console.log(err);
    });

  }

  onAddBook(event) {
    const dialogref = this.dialog.open(AddMovieComponent, {
      width: '500px'
    });
    const sub = dialogref.componentInstance.onAdd.subscribe((form) => {
      // do something
      console.log('Form', form);
      this.apiService.addMovie(form).subscribe(result => {
        // event.preventDefault();

        console.log('added')
      }, err => {
        console.log(err);
      });
      // dialogref.afterClosed().subscribe(() => {
      //   dialogref.componentInstance.onAdd.unsubscribe();
      // });
    });


  }

  onDeleteMovie(id) {
    this.dialog.open(YesNoComponent, {
      width: '300px',
      data: id
    }).afterClosed().subscribe(result => {
      if (result) {
        this.apiService.deleteMovie(id).subscribe(() => {
          console.log('Movie was deleted');
        });
      }
    });
  }

  onEditMovie(movie) {
    this.dialog.open(EditDialogComponent, {
      width: '600px',
      data: movie
    });

  }

}
