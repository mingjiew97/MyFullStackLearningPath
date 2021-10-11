import { Component, OnInit } from '@angular/core';
import {User} from '../models/user';
import {AuthService} from '../services/auth.service';
import {ApiResponse} from '../models/api-response';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  defaultUsername = 'user';
  defaultPassword = 'userpass';

  constructor(
    private authService: AuthService,
    private router: Router,
    private msb: MatSnackBar
  ) { }

  ngOnInit() {
  }

  login(user: User) {
    this.authService.login(user)
      .subscribe((res: ApiResponse) => {
        if (res.success) {
          this.msb.open(res.message, 'Dismiss', {
            duration: 2000
          });
          this.router.navigate(['/demo']);
        }
      }, err => {
        this.msb.open(err.error.message, 'Dismiss', {
          duration: 2000
        });
      });
  }

  populate(type) {
    if (type === 'user') {
      this.defaultUsername = 'user';
      this.defaultPassword = 'userpass';
    } else {
      this.defaultUsername = 'admin';
      this.defaultPassword = 'adminpass';
    }
  }

}
