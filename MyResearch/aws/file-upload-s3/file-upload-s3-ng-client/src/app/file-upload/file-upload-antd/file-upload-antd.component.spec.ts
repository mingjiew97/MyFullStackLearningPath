import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadAntdComponent } from './file-upload-antd.component';

describe('FileUploadAntdComponent', () => {
  let component: FileUploadAntdComponent;
  let fixture: ComponentFixture<FileUploadAntdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileUploadAntdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploadAntdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
