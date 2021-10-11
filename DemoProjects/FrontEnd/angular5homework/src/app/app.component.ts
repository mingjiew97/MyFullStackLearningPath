import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  open: boolean = false;

  constructor(
    public as: AuthService,
    private router: Router
  ) {}

  handleNavOpen(open) {
    this.open = open;
  }

  logout() {
    this.as.logout();
    this.as.userSubject.next(null);
    this.router.navigate(['/login']);
  }

}
