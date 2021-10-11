import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyExchange'
})
export class CurrencyExchangePipe implements PipeTransform {

  currencyRate: Map<string, number> = new Map([['CNY', 6.79], ['JPY', 112.42]]);
  // { 'CNY': 6.79, 'JPY': 114.42 }

  transform(value: any, currencyCode: string): any {
    return value * this.currencyRate.get(currencyCode);
  }

}
