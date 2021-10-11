import { Injectable } from '@angular/core';
import {Observable, interval, Subject, BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {switchMap} from 'rxjs/operators';

// a subject is an observable and an observer.
// ReplaySubject, BehaviorSubject, AsyncSubject

@Injectable()
export class BitcoinService {

  priceSubject: Subject<{}> = new BehaviorSubject<{}>(null);

  constructor(
    private http: HttpClient
  ) {
    this.getCachedPrice();
    this.http.get('http://localhost:8080/users')
      .subscribe((data) => {
        console.log(data);
      });
  }

  getCurrentPrice(): Observable<any> {
    return this.http.get('https://api.coindesk.com/v1/bpi/currentprice.json');
  }

  getStreamedPrice(): Observable<any> {
    return interval(61000)
      .pipe(
        switchMap(() => this.getCurrentPrice())
      );
  }

  getCachedPrice() {
    this.getCurrentPrice()
      .subscribe((res) => {
        this.priceSubject.next(res);
      });
  }
}
