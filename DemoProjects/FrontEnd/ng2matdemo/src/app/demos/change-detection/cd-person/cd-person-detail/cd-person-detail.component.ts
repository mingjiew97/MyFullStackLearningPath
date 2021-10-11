import { Component, OnInit, OnChanges, DoCheck, AfterViewChecked, Input } from '@angular/core';

@Component({
  selector: 'app-cd-person-detail',
  templateUrl: './cd-person-detail.component.html',
  styleUrls: ['./cd-person-detail.component.scss']
})
export class CdPersonDetailComponent implements OnInit, OnChanges, DoCheck, AfterViewChecked {

  @Input()
  person;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log(new Date() + '- ngOnChanges in cd-person-detail');
  }

  ngDoCheck() {
    console.log(new Date() + '- ngDoCheck in cd-person-detail');
  }

  ngAfterViewChecked() {
    console.log(new Date() + '- ngAfterViewChecked in cd-person-detail');
  }

}
