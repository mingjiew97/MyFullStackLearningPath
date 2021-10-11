import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moneyFilter',
  pure: false
})
export class MoneyFilterPipe implements PipeTransform {

  transform(value: any[], args?: any): any {
    return value.filter((m) => m > 50);
  }

}
