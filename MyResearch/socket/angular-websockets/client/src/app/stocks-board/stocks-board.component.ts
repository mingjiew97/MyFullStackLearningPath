import {Component, OnInit} from '@angular/core';
import {StockService} from '../services/stock.service';
import {SocketStatus} from '../utils/socket-status.enum';
import {Stock} from '../models/stock';
import {Router} from '@angular/router';

@Component({
  selector: 'app-stocks-board',
  templateUrl: './stocks-board.component.html',
  styleUrls: ['./stocks-board.component.scss']
})
export class StocksBoardComponent implements OnInit {

  stocksList = [];
  displayedColumns: string[] = ['symbol', 'price', 'time'];
  selectedStock = null;
  SocketStatus = SocketStatus;

  constructor(
    public stockService: StockService,
    private router: Router
  ) { }

  ngOnInit() {
    this.stockService.getStocksList()
      .subscribe((stocksList: string[]) => {
        this.stocksList = stocksList;
      });
    this.stockService.socket$
      .subscribe(null, null, () => {
        // socket closed
      });
  }

  addStockToTrack() {
    if (this.selectedStock) {
      this.stockService.seclectedStocksList.add(this.selectedStock);
      this.stockService.socket$.next(JSON.stringify(Array.from(this.stockService.seclectedStocksList)));
    }
  }

  removeStockToTrack(stockSymbol: string) {
    if (this.selectedStock) {
      this.stockService.seclectedStocksList.delete(this.selectedStock);
      this.stockService.socket$.next(JSON.stringify(Array.from(this.stockService.seclectedStocksList)));
    }
  }

  selectStock(row: Stock) {
    this.router.navigate(['/stocks-detail', row.symbol]);
  }
}
