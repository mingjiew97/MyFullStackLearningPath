import { Component, OnInit } from '@angular/core';
import {OrdersService} from '../shared/services/orders.service';
import {Order} from '../shared/models/order';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {GetOrders} from '../shared/actions/orders.action';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders: Order[];
  orders$: Observable<Order[]>;

  constructor(
    private ordersService: OrdersService,
    private store: Store<{orders: Order[]}>
  ) {
    this.orders$ = store.pipe(
      select('orders')
    );
  }

  ngOnInit() {
    // this.ordersService.getOrders().subscribe(orders => {
    //   this.orders = orders;
    // });
    this.store.dispatch(new GetOrders());
  }

}
