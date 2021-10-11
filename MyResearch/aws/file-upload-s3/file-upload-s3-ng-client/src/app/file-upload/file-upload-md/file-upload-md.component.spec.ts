import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadMdComponent } from './file-upload-md.component';

describe('FileUploadMdComponent', () => {
  let component: FileUploadMdComponent;
  let fixture: ComponentFixture<FileUploadMdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileUploadMdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploadMdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
