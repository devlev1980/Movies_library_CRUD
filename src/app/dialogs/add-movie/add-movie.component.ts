import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {
  addMovieForm: FormGroup;

  constructor(private apiService: ApiService) {
    this.addMovieForm = new FormGroup({
      title: new FormControl('', Validators.required),
      director: new FormControl('', Validators.required),
      genre: new FormControl('', Validators.required),
      year: new FormControl('', Validators.minLength(4))
    });
  }

  ngOnInit() {
    this.apiService.getMovies().subscribe()
  }

  onAddMovie(form) {
    console.log('add', form);
    this.apiService.addMovie(form).subscribe(result => {
      if (result) {
        console.log('Movie was added');
      }
    });

  }

}
