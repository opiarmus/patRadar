import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textAbbr'
})
export class TextAbbrPipe implements PipeTransform {

  transform(value: any, maxLength = 100, suffix = '...'): string {
    return value.length > maxLength
      ? value.substring(0, maxLength - suffix.length) + suffix
      : value;
  }

}
