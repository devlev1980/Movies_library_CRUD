import {Component, ElementRef, EventEmitter, Inject, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../services/api.service';
import {MoviesListComponent} from '../../movies-list/movies-list.component';
import {Movie} from '../../models/movie';
import {DataService} from '../../services/data.service';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {
  addMovieForm: FormGroup;
  onAdd = new EventEmitter();
  movies: Movie[];

  constructor(private apiService: ApiService, private dataService: DataService,
              @Inject(MAT_DIALOG_DATA) public data: any) {


    this.addMovieForm = new FormGroup({
      title: new FormControl('The Nun', Validators.required),
      director: new FormControl('Corin Hardy', Validators.required),
      genre: new FormControl('Thriller', Validators.required),
      runtime: new FormControl('96 min', Validators.required),
      year: new FormControl('2018', [Validators.required,
        Validators.maxLength(4),
        Validators.minLength(4),
        Validators.pattern('^[0-9]*$')])
    });

  }


  ngOnInit() {
    console.log('movies', this.data);
  }


  onAddMovie(form) {
    console.log('add', form.title);

    this.data.forEach((movie) => {
      console.log(movie.title===form.title);

    });
    // if (form.title ===)
    // this.onAdd.emit(form);
    // let duplicates = this.movies.find(movie => movie.title === form.title);

    // this.apiService.addMovie(form).subscribe(result => {
    //   if (result) {
    //     console.log('Movie was added');
    //   }
    // });
      }

  // }


  // }

}
