import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';
import {Router} from '@angular/router';
import {ShoppingCartService} from '../../shared/services/shopping-cart.service';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {Item} from '../../shared/models/item';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  show = false;
  itemsCount$: Observable<number>;

  constructor(
    public authService: AuthService,
    private router: Router,
    private shoppingCartService: ShoppingCartService,
    private store: Store<{items: Item[]}>
  ) {
    this.itemsCount$ = store.pipe(
      select('items'),
      map((items: Item[]) => {
        return items.length ? items.map(item => item.qty).reduce((a, b) => a + b) : 0;
      })
    );
  }

  ngOnInit() {
    // this.authService.userSubject.subscribe((res) => {
    //   console.log(res);
    // });
  }

  logout() {
    this.authService.logout()
      .subscribe((res: {success: true}) => {
        if (res.success) {
          this.router.navigate(['/home']);
          this.authService.userSubject.next(null);
        }
      });
  }

  toggleCollapse() {
    this.show = !this.show;
  }

}
