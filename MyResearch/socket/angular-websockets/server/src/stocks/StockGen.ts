import {Stock} from './Stock';
import {interval, Observable} from 'rxjs';
import {switchMap, map} from 'rxjs/operators';
import {STOCKS} from './STOCKS_DATA';

export class StockGen {
  private stocks: Stock[] = [];
  private selectedStocks = new Set<string>();
  generator: Observable<Stock[]>;

  constructor() {
    this.stocks = STOCKS;
    this.generator = this.generate();
  }

  generate(): Observable<Stock[]> {
    return interval(1500)
      .pipe(
        map(
          () => {
            return this.stocks.filter(stock => {
              return this.selectedStocks.has(stock.symbol);
            }).map(stock => {
              // random the price.
              const adjust = (Math.random() * 0.5 / 100 * (Math.random() > 0.5 ? -1 : 1) + 1);
              stock.price *= adjust;
              stock.time = Date.now();
              return stock;
            });
          }
        )
      );
  }

  selectStock(stocksList: Set<string>) {
    this.selectedStocks = stocksList;
  }

  static getStocksList(): string[] {
    return STOCKS.map((stock: Stock) => stock.symbol);
  }
}