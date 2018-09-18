import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs/Observable';
import {Movie} from '../models/movie';
import {map} from 'rxjs/operators';

@Injectable()
export class ApiService {
  movies = {} as Movie[];

  constructor(private _http: HttpClient) {
  }

  getMovies(): Observable<any> {
    return this._http.get(environment.apiURL).pipe(map((data: any) => {
      return data;
    }));
  }

  addMovie(movie) {
    return this._http.post(environment.apiURL, movie);
  }

  updateMovie(movie, id) {
    const url = environment.apiURL;
    const updatedMovie = {
      id: id,
      title: movie.title,
      year: movie.year,
      runtime: movie.runtime,
      genre: movie.genre,
      director: movie.director
    };
    return this._http.put(url, updatedMovie);
  }

  deleteMovie(id) {
    const url = environment.apiURL + id;
    return this._http.delete(url, id);
  }

}
