import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FileDto} from './file-dto';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  private FILE_UPLOAD_URL = `${environment.API_URL}/file-upload`;

  constructor(
    private httpClient: HttpClient
  ) { }

  getUploadInfo(fileName: string): Observable<FileDto> {
    return this.httpClient.get<FileDto>(`${this.FILE_UPLOAD_URL}/singedUrls?fileName=${fileName}`);
  }

  upload(signedUrl: string, fileContents: any) {
    const req = new HttpRequest('PUT', signedUrl, fileContents, {
      reportProgress: true
    });
    return this.httpClient.request(req);
  }

  delete(signedUrl: string): Observable<boolean> {
    const req = new HttpRequest('DELETE', signedUrl);
    return this.httpClient.request(req)
      .pipe(
        map(res => {
          return true;
        })
      );
  }

}
