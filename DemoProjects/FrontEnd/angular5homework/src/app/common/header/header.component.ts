import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output()
  onNavOpen: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    public as: AuthService
  ) { }

  ngOnInit() {

  }

  onClickMenu() {
    this.onNavOpen.next(true);
  }

}
