import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {

  myFormGroup: FormGroup;
  nameControl: FormControl;

  constructor() {
    this.nameControl = new FormControl('Bob');
    this.myFormGroup = new FormGroup({
      name: this.nameControl,
      age: new FormControl(18)
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.myFormGroup.value);
  }


}
