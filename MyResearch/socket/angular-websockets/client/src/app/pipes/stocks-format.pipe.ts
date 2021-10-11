import { Pipe, PipeTransform } from '@angular/core';
import {Stock} from '../models/stock';

@Pipe({
  name: 'stocksFormat'
})
export class StocksFormatPipe implements PipeTransform {

  transform(value: string): Stock[] {
    console.log(value);
    return JSON.parse(value);
  }

}
