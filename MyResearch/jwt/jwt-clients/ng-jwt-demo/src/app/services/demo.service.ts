import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {environment} from '../../environments/environment';
import {ApiResponse} from '../models/api-response';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getPublicContent(): Observable<ApiResponse> {
    return this.httpClient.get<ApiResponse>(`${environment.API_URL}/public_content`);
  }

  public getUserContent(): Observable<ApiResponse> {
    return this.httpClient.get<ApiResponse>(`${environment.API_URL}/user_content`);
  }

  public getAdminContent(): Observable<ApiResponse> {
    return this.httpClient.get<ApiResponse>(`${environment.API_URL}/admin_content`);
  }

}
