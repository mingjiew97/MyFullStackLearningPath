import { Component, OnInit, OnChanges, DoCheck, AfterViewChecked, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-cd-person',
  templateUrl: './cd-person.component.html',
  styleUrls: ['./cd-person.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CdPersonComponent implements OnInit, OnChanges, DoCheck, AfterViewChecked {

  @Input()
  person;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log(new Date() + '- ngOnChanges in cd-person');
  }

  ngDoCheck() {
    console.log(new Date() + '- ngDoCheck in cd-person');
  }

  ngAfterViewChecked() {
    console.log(new Date() + '- ngAfterViewChecked in cd-person');
  }

}
