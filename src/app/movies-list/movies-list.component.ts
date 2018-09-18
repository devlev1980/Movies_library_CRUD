import {Component, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';
import {Movie} from '../models/movie';
import {MatDialog} from '@angular/material';
import {AddMovieComponent} from '../dialogs/add-movie/add-movie.component';
import {YesNoComponent} from '../dialogs/yes-no/yes-no.component';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  movies: Movie[];

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

    });

  }

  onAddBook() {
    this.dialog.open(AddMovieComponent, {
      width: '500px'
    });

  }

  onDeleteBook(id) {
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

}
