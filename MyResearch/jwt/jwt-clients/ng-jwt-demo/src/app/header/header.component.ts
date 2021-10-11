import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {ApiResponse} from '../models/api-response';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private router: Router,
    private msb: MatSnackBar
  ) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout()
      .subscribe((res: ApiResponse) => {
        if (res.success) {
          this.msb.open(res.message, 'Dismiss', {
            duration: 2000
          });
          this.router.navigate(['/login']);
        }
      });
  }

}
