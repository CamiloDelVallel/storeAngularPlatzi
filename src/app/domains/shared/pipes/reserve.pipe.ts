import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reserve',
  standalone: true
})
export class ReservePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
