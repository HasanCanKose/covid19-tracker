import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'comma'
})
export class NumbersWithCommasPipe implements PipeTransform {

  transform(value: number) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

}
