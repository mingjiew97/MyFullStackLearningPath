import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CustomStyleModule } from './shared/modules/custom-style/custom-style.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './commons/header/header.component';
import { FooterComponent } from './commons/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductOverviewComponent } from './products/product-overview/product-overview.component';
import { UserInfoComponent } from './users/user-info/user-info.component';
import { OrdersComponent } from './orders/orders.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductsPipePipe } from './shared/pipes/products-pipe.pipe';
import { DemosComponent } from './demos/demos.component';
import {StoreModule} from '@ngrx/store';
import {shoppingCartReducer} from './shared/reducers/shopping-cart.reducer';
import {EffectsModule} from '@ngrx/effects';
import {OrdersEffect} from './shared/effects/orders.effect';
import {ordersReducer} from './shared/reducers/orders.reducer';
import {ColorRedAlertHelloDirective} from './shared/directives/color-red-alert-hello.directive';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProductsComponent,
    ProductDetailComponent,
    ProductOverviewComponent,
    UserInfoComponent,
    OrdersComponent,
    ShoppingCartComponent,
    ProductsPipePipe,
    DemosComponent,
    ColorRedAlertHelloDirective
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    CustomStyleModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({
      items: shoppingCartReducer,
      orders: ordersReducer
    }),
    EffectsModule.forRoot([
      OrdersEffect
    ]),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
