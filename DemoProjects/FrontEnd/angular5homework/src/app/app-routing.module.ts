import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { AppGuard } from './app.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [AppGuard],
    children: [
      {
        path: 'add_product',
        component: ProductDetailComponent
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'products/:name',
        component: ProductDetailComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '**',
    redirectTo: 'products'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
