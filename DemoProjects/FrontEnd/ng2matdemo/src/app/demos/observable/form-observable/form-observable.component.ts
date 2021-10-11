import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-form-observable',
  templateUrl: './form-observable.component.html',
  styleUrls: ['./form-observable.component.scss']
})
export class FormObservableComponent implements OnInit {

  counterFC: FormControl;
  counter: number;
  counterSub;

  constructor() {
    this.counterFC = new FormControl();
    // an observable is an object which will continuously send data to all its observers over time.
    const ob = this.counterFC.valueChanges
      .pipe(
        map((value) => value * 2)
      );

    // observers
    this.counterSub = ob.subscribe(value => {
        if (value >= 0 ) {
          this.counter = value;
        } else {
          this.counter = -value;
        }
      });

    // 10min: abc, after 10min: d
    // Observable: a,ab,abc, abcd
    // Behavior Subject abc, abcd
    // Replay Subject: a, ab, abc, abcd
    setTimeout(()=> {
      const sub1 = ob.subscribe(value => {
        console.log(value);
      });
    }, 60000 * 10);
  }

  ngOnInit() {
  }

  unsubscribe() {
    this.counterSub.unsubscribe();
  }
}
