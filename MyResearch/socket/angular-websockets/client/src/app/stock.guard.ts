import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {StockService} from './services/stock.service';
import {SocketStatus} from './utils/socket-status.enum';

@Injectable({
  providedIn: 'root'
})
export class StockGuard implements CanActivate {

  constructor(
    private stockService: StockService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(this.stockService.status);
    if (this.stockService.status === SocketStatus.CONNECTED) {
      return true;
    } else {
      this.router.navigate(['/stocks']);
      return false;
    }
  }
  
}
