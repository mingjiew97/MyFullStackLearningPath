import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-s1',
  templateUrl: './s1.component.html',
  styleUrls: ['./s1.component.scss']
})
export class S1Component implements OnInit {

  constructor(
    private r: ActivatedRoute
  ) {
    console.log('s1');
  }

  ngOnInit() {
    console.log(this.r.snapshot.params);
    this.r.paramMap
      .subscribe(d => {
        console.log('paramMap', d);
      });
  }

}
