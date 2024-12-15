import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kapapCase'
})
export class KapapCasePipe implements PipeTransform {

  transform(value: string): string {
    
    return value.toUpperCase()
  }

}
