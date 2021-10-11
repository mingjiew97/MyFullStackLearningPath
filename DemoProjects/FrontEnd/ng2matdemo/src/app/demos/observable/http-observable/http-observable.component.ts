import { Component, OnInit } from '@angular/core';
import {BitcoinService} from '../../shared/services/bitcoin.service';


@Component({
  selector: 'app-http-observable',
  templateUrl: './http-observable.component.html',
  styleUrls: ['./http-observable.component.scss'],
  providers: [
    BitcoinService
  ]
})
export class HttpObservableComponent implements OnInit {

  initial_price: number;
  data = [];

  constructor(
    private bs: BitcoinService
  ) { }

  ngOnInit() {
    this.bs.getCurrentPrice()
      .subscribe((res) => {
        this.initial_price = res.bpi['USD'].rate_float;
      });
    this.bs.getStreamedPrice()
      .subscribe((res) => {
        const current_price = res.bpi['USD'].rate_float;
        this.data.push(current_price);
      });
    this.bs.priceSubject
      .subscribe((res) => {
        console.log(res);
      });
  }

}
