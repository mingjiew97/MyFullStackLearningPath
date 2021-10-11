import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FileDto} from '../../file-dto';
import {FileUploadService} from '../../file-upload.service';
import {NgFileWrapper} from './ng-file-wrapper';
import {HttpEvent, HttpResponse} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-file-upload-md',
  templateUrl: './file-upload-md.component.html',
  styleUrls: ['./file-upload-md.component.scss']
})
export class FileUploadMdComponent implements AfterViewInit {

  @ViewChild('fileUpload', {static: false})
  fileUpload: ElementRef;
  progress = 0;
  ngFileWrappers: NgFileWrapper[] = [];

  constructor(
    private fus: FileUploadService,
    private snackBar: MatSnackBar
  ) { }

  ngAfterViewInit(): void {
    const fileUpload = this.fileUpload.nativeElement;
    fileUpload.onchange = () => {
      for (let index = 0; index < fileUpload.files.length; index++)
      {
        const file = fileUpload.files[index];
        const i = this.ngFileWrappers.findIndex(f => f.file.name === file.name);
        if (i === -1) {
          const ngFileWrapper = new NgFileWrapper();
          ngFileWrapper.file = file;
          this.fus.getUploadInfo(file.name)
            .subscribe((fileDto: FileDto) => {
              ngFileWrapper.fileDto = fileDto;
              this.ngFileWrappers.push(ngFileWrapper);
            }, () => {
              this.snackBar.open('Something went wrong, try again...', 'Dismiss', {
                duration: 2000,
              });
            });
        }
      }
    };
  }

  select() {
    this.progress = 0;
    const fileUpload = this.fileUpload.nativeElement;
    fileUpload.click();
  }

  upload() {
    this.progress = 0;
    this.ngFileWrappers.forEach((ngFileWrapper: NgFileWrapper, index: number) => {
      this.fus.upload(ngFileWrapper.fileDto.uploadUrl, ngFileWrapper.file).subscribe((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            this.progress += Math.ceil(100 / this.ngFileWrappers.length);
            ngFileWrapper.uploaded = true;
            if (this.progress >= 100) {
              this.snackBar.open(`Uploaded ${this.ngFileWrappers.length} file(s)!`, 'Dismiss', {
                duration: 2000
              });
            }
          }
        },
        err => {
          // this.progress = 0;
        });
    });
  }

  remove(file) {
    this.progress = 0;
    const index = this.ngFileWrappers.findIndex(f => f.file.name === file.name);
    this.ngFileWrappers.splice(index, 1);
  }
}
