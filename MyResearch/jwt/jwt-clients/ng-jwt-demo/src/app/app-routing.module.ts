import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DemoComponent} from './demo/demo.component';
import {PublicComponent} from './business/public/public.component';
import {UserComponent} from './business/user/user.component';
import {AdminComponent} from './business/admin/admin.component';
import {AuthGuard} from './guards/auth.guard';
import {RoleGuard} from './guards/role.guard';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {RegisterComponent} from './register/register.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'demo',
    component: DemoComponent
  },
  {
    path: 'public',
    component: PublicComponent
  },
  {
    path: 'user',
    component: UserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard, RoleGuard]
  },
  {
    path: '404',
    component: PageNotFoundComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'demo'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
