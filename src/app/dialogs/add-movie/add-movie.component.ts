import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {
  addMovieForm: FormGroup;

  constructor() {
    this.addMovieForm = new FormGroup({
      title: new FormControl('', Validators.required),
      director: new FormControl('', Validators.required),
      genre: new FormControl('', Validators.required),
      year: new FormControl('', Validators.minLength(4))
    });
  }

  ngOnInit() {
  }
  onAddMovie(form){
    console.log(form)
  }

}
