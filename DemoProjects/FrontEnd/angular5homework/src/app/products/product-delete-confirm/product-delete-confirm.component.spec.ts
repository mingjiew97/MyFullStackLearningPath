import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDeleteConfirmComponent } from './product-delete-confirm.component';

describe('ProductDeleteConfirmComponent', () => {
  let component: ProductDeleteConfirmComponent;
  let fixture: ComponentFixture<ProductDeleteConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDeleteConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDeleteConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
