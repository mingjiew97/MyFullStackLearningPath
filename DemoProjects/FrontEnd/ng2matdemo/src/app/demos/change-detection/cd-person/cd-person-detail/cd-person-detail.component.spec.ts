import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdPersonDetailComponent } from './cd-person-detail.component';

describe('CdPersonDetailComponent', () => {
  let component: CdPersonDetailComponent;
  let fixture: ComponentFixture<CdPersonDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdPersonDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdPersonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
