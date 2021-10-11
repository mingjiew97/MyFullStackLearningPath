import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {

  money = 100;

  moneyList = [5, 23, 53, 41, 52, 99];

  newMoney;

  fetchMoney = new Promise((resolve, reject) => {
    setTimeout(() => resolve(200), 2000);
  });

  constructor() { }

  ngOnInit() {
    this.fetchMoney.then((num) => {
      // display num
    });
  }

  addMoney() {
    this.moneyList.push(this.newMoney); // impure change.
    // change array reference. pure change.
    // this.moneyList = [...this.moneyList, this.newMoney];
  }

}
