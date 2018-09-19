import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'input'
})
export class InputPipe implements PipeTransform {

  transform(movies: any, input: any): any {
    if (!input) {
      return movies;
    } else {
      return input.chartAt(0).toUpperCase() + input.slice(1);
    }
  }
}
