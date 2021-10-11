import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StocksBoardComponent} from './stocks-board/stocks-board.component';
import {StockDetailComponent} from './stock-detail/stock-detail.component';
import {StockGuard} from './stock.guard';

const routes: Routes = [
  {
    path: 'stocks',
    component: StocksBoardComponent
  },
  {
    path: 'stocks-detail/:symbol',
    component: StockDetailComponent,
    canActivate: [StockGuard]
  },
  {
    path: '**',
    redirectTo: '/stocks'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
