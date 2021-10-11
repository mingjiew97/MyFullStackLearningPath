import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../models/user';
import {AuthService} from '../services/auth.service';
import {ApiResponse} from '../models/api-response';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  fg: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private msb: MatSnackBar
  ) { }

  ngOnInit() {
    this.fg = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  register() {
    if (this.fg.valid) {
      const user: User = this.fg.value as User;
      this.authService.register(user)
        .pipe(
          switchMap((res: ApiResponse) => {
            if (res.success) {
              return this.authService.login(user);
            }
          })
        )
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
  }

}
