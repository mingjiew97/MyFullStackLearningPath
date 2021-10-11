import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as Highcharts from 'highcharts/highstock';
import {of} from 'rxjs';
import {StockService} from '../services/stock.service';
import {Stock} from '../models/stock';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.scss']
})
export class StockDetailComponent implements OnInit {

  data = [];
  Highcharts = Highcharts;
  chartOptions = {
    rangeSelector: {
      selected: 1
    },
    title: {
      text: ''
    },
    series: []
  };
  updateFlag = false;

  constructor(
    private stockService: StockService,
    private ar: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const self = this;
    this.ar.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          const symbol = params.get('symbol');
          this.chartOptions.title.text = symbol + ' Price';
          return this.stockService.socket$.pipe(
            map((data: any) => {
              const stocks: Stock[] = data as Stock[];
              const stock = stocks.find(s => s.symbol === symbol);
              if (!stock) { // redirect. very ugly trick. need to redo
                this.router.navigate(['/stocks']);
                return null;
              }
              return {
                data: [stock.time, stock.price],
                symbol: stock.symbol
              };
            })
          );
        })
      )
      .subscribe((sdata: {data: [number, number], symbol: string}) => {
        if (sdata) {
          this.data = [...this.data, sdata.data];
          this.chartOptions.series = [{
            tooltip: {
              valueDecimals: 2
            },
            name: sdata.symbol,
            data: this.data
          }];
          this.updateFlag = true;
        }
      });
  }
}
