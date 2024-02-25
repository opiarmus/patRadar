import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'localDate'
})
export class LocalDatePipe implements PipeTransform {

  transform(value: any, dateFormat: string = 'de-CH'): string {
    if (value == typeof Date) {
      return value.toLocaleDateString(dateFormat);
    } else {
      const date = new Date(value);
      return date.toLocaleDateString(dateFormat);
    }
  }

}
