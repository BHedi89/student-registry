import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    return value === 'FEMALE' ? 'Nő' : 'Férfi';
  }

}
