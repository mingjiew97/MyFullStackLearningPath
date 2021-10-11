import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cc-child',
  templateUrl: './cc-child.component.html',
  styleUrls: ['./cc-child.component.scss']
})
export class CcChildComponent implements OnInit {

  @Input()
  person;

  @Output()
  onAddAge = new EventEmitter<number>();

  age: number;

  constructor() { }

  ngOnInit() {
    this.age = this.person.age;
  }

  addAge() {
    // this.person.age++;
    this.age++;
    this.onAddAge.emit(this.age);
  }


}
