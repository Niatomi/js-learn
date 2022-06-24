import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe',
})
export class CustomPipePipe implements PipeTransform {
  transform(value: number, pow: number = 2, c: number = 0): unknown {
    return Math.pow(value, pow) + 1;
  }
}
