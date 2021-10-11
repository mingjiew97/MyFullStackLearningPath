import { Component, OnInit, OnDestroy } from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService as SAuthService } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginFormGroup: FormGroup;
  err: boolean = false;
  fbSub;

  constructor(
    private as: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private sas: SAuthService
  ) { }

  ngOnInit() {
    this.loginFormGroup = this.fb.group({
      email: '',
      password: ''
    });
  }

  onSubmit() {
    if (this.loginFormGroup.valid){
      this.as.login(this.loginFormGroup.value)
        .subscribe(res => {
          if(res.success) {
            this.router.navigate(['/products']);
          } else {
            this.err = true;
          }
        });
    } else {
      return false;
    }
  }

  onRegister() {
    this.router.navigate(['/register']);
  }

  updateErr() {
    if (this.err) {
      this.err = false;
    }
  }

  signInWithFB() {
    this.as.fbLogin();
  }

  signInWithGoogle() {
    this.as.googleLogin();
  }

  ngOnDestroy() {

  }

}
