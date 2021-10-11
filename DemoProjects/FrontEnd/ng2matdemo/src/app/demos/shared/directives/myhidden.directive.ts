import { Directive, Input, ElementRef, OnChanges } from '@angular/core';

@Directive({
  selector: '[appMyhidden]'
})
export class MyhiddenDirective implements OnChanges {

  @Input()
  person;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnChanges() {
    // this.elementRef.nativeElement -> host element.
    if (this.person) {
      this.elementRef.nativeElement.style.display = '';
    } else {
      this.elementRef.nativeElement.style.display = 'none';
    }
  }

}
