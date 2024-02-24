import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'localDate'
})
export class LocalDatePipe implements PipeTransform {

  transform(value: Date, dateFormat: string = 'de-CH'): string {
    return value.toLocaleDateString(dateFormat);
  }

}
