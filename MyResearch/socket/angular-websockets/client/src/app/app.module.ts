import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StocksBoardComponent } from './stocks-board/stocks-board.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatSelectModule, MatTableModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import { StocksFormatPipe } from './pipes/stocks-format.pipe';
import { StockDetailComponent } from './stock-detail/stock-detail.component';
import {HighchartsChartModule} from 'highcharts-angular';

@NgModule({
  declarations: [
    AppComponent,
    StocksBoardComponent,
    StocksFormatPipe,
    StockDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatTableModule,
    MatButtonModule,
    HttpClientModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
