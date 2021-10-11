import { Component, OnInit } from '@angular/core';
import {NzMessageService, NzUploadFile} from 'ng-zorro-antd';
import {FileUploadService} from '../../file-upload.service';
import {HttpEvent, HttpEventType, HttpResponse} from '@angular/common/http';
import {FileDto} from '../../file-dto';
import {NzFileWrapper} from './nz-file-wrapper';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-file-upload-antd',
  templateUrl: './file-upload-antd.component.html',
  styleUrls: ['./file-upload-antd.component.scss']
})
export class FileUploadAntdComponent implements OnInit {

  showUploadListOptions = {
    showRemoveIcon: true,
    showDownloadIcon: false
  };
  nzFileWrappers: NzFileWrapper[] = [];
  fileList: NzUploadFile[] = [];
  percent = 0;

  constructor(
    private msg: NzMessageService,
    private fus: FileUploadService
  ) { }

  ngOnInit(): void {

  }

  upload = () => {
    this.percent = 0;
    this.nzFileWrappers.forEach((nzFileWrapper: NzFileWrapper, index: number) => {
      this.fus.upload(nzFileWrapper.fileDto.uploadUrl, nzFileWrapper.file).subscribe((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            this.percent += Math.ceil(100 / this.nzFileWrappers.length);
            if (this.percent >= 100) {
              this.msg.success(`Uploaded ${this.nzFileWrappers.length} file(s)!`);
            }
          }
        },
        err => {
          this.percent = 0;
          this.msg.error('upload failed. Try again.');
        });
    });
  }

  beforeUpload = (file: NzUploadFile): boolean => {
    this.percent = 0;
    const nzFileWrapper = new NzFileWrapper();
    nzFileWrapper.file = file;
    this.fileList = [...this.fileList, nzFileWrapper.file];
    this.fus.getUploadInfo(nzFileWrapper.file.name)
      .subscribe((fileDto: FileDto) => {
        nzFileWrapper.fileDto = fileDto;
        this.nzFileWrappers.push(nzFileWrapper);
      });
    return false;
  }

  handleDelete = (file: NzUploadFile): boolean => {
    this.percent = 0;
    const index = this.fileList.findIndex((f: NzUploadFile) => {
      return file.uid === f.uid;
    });
    this.fileList.splice(index, 1);
    this.nzFileWrappers.splice(index, 1);
    return false;
  }


}
