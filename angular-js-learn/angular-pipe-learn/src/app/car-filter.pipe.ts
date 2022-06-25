import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carFilter',
  pure: false,
})
export class CarFilterPipe implements PipeTransform {
  transform(
    carList: { name: string; desc: string }[],
    searchCar: string,
    fieldName: string
  ): { name: string; desc: string }[] {
    if (carList.length === 0 || searchCar === '') return carList;

    return carList.filter(
      (car) =>
        (car as any)[fieldName]
          .toLowerCase()
          .indexOf(searchCar.toLocaleLowerCase()) !== -1
    );
  }
}
