import { Component, OnInit } from '@angular/core';
import {DemoService} from '../services/demo.service';
import {Observable} from 'rxjs';
import {ApiResponse} from '../models/api-response';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  result = '';

  constructor(
    private demoService: DemoService
  ) { }

  ngOnInit() {
  }

  getContent(type) {
    let ob$: Observable<ApiResponse>;
    switch (type) {
      case 'public':
        ob$ = this.demoService.getPublicContent();
        break;
      case 'user':
        ob$ = this.demoService.getUserContent();
        break;
      case 'admin':
        ob$ = this.demoService.getAdminContent();
        break;
      default:
        break;
    }
    if (ob$) {
      ob$.subscribe((res: ApiResponse) => {
        this.result = res.message;
      }, (err) => {
        this.result = err.error.message;
      });
    }
  }

}
