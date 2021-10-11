import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-directive',
  templateUrl: './ng-directive.component.html',
  styleUrls: ['./ng-directive.component.scss']
})
export class NgDirectiveComponent implements OnInit {

  myColor = 'red';

  myStyle = {color: 'yellow'};

  myClass = 'my-class';

  mySwitch: number;

  constructor() { }

  ngOnInit() {
  }

}
