import {Component, ElementRef, EventEmitter, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../services/api.service';
import {MoviesListComponent} from '../../movies-list/movies-list.component';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {
  addMovieForm: FormGroup;
  onAdd = new EventEmitter();

  constructor(private apiService: ApiService) {
    this.addMovieForm = new FormGroup({
      title: new FormControl('', Validators.required),
      director: new FormControl('', Validators.required),
      genre: new FormControl('', Validators.required),
      runtime: new FormControl('', Validators.required),
      year: new FormControl('', [Validators.required,
        Validators.maxLength(4),
        Validators.minLength(4),
        Validators.pattern('^[0-9]*$')])
    });
  }

  ngOnInit() {
  }

  onAddMovie(form) {
    console.log('add', form);
    // this.onAdd.emit(form);
    this.apiService.addMovie(form).subscribe(result => {
      if (result) {
        console.log('Movie was added');
      }

    });


  }

}
