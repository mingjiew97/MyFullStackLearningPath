import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule, MatToolbarModule, MatIconModule, MatInputModule,
  MatSidenavModule, MatListModule, MatCardModule, MatTableModule, MatDialogModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';
import { JwtModule } from '@auth0/angular-jwt';

import {ProductsService} from './shared/services/products.service';
import {AuthService} from './shared/services/auth.service';
import { AppGuard } from './app.guard';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductDeleteConfirmComponent } from './products/product-delete-confirm/product-delete-confirm.component';

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('709146169588-cr3q9ncbsjf486l76pqgqgjqdheduv47.apps.googleusercontent.com')
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('571123523279490')
  }
]);

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    RegisterComponent,
    LoginComponent,
    ProductDetailComponent,
    ProductDeleteConfirmComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatInputModule,
    MatDialogModule,
    CdkTableModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SocialLoginModule.initialize(config),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:3000']
      }
    })
  ],
  providers: [
    ProductsService,
    AuthService,
    AppGuard
  ],
  bootstrap: [AppComponent],
  entryComponents: [ProductDeleteConfirmComponent]
})
export class AppModule { }
