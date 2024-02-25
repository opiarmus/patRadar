import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'localDate'
})
export class LocalDatePipe implements PipeTransform {

  transform(value: any, dateFormat: string = 'de-CH'): string {
    try {
      if (value == typeof Date) {
        return value.toLocaleDateString(dateFormat);
      }
      const date = new Date(value);
      return date.toLocaleDateString(dateFormat);
    } catch {
      return 'invalid date';
    }
  }

}
