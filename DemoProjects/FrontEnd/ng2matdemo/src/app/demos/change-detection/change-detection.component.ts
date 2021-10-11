import { Component, OnInit, OnChanges,
  DoCheck, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { Person } from '../shared/models/person';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.scss']
})
export class ChangeDetectionComponent implements OnInit, OnChanges, DoCheck, AfterViewChecked {

  person: Person = new Person('Bob', 22);

  constructor(
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    // this.cd.detach();
  }

  ngOnChanges() {
    console.log(new Date() + '- ngOnChanges in cd');
  }

  ngDoCheck() {
    console.log(new Date() + '- ngDoCheck in cd');
  }

  ngAfterViewChecked() {
    console.log(new Date() + '- ngAfterViewChecked in cd');
  }

  addAge() {
    this.person.age++;
  }

  updateAge() {
    let age:number = this.person.age;
    age++;
    this.person = new Person(this.person.name, age);
  }

}
