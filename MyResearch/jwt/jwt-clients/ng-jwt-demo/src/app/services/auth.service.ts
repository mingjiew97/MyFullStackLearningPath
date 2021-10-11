import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {ApiResponse} from '../models/api-response';
import {tap} from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Authority} from '../models/authority.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // cache user
  private user: User = null;

  constructor(
    private httpClient: HttpClient,
    private jwtHelper: JwtHelperService
  ) {
    if (localStorage.getItem('access_token')) {
      this.setUser();
    }
  }

  login(user: User): Observable<ApiResponse> {
    return this.httpClient.post<ApiResponse>(`${environment.API_URL}/login`, user)
      .pipe(
        tap((res: ApiResponse) => res.success && this.postLogin(res))
      );
  }

  postLogin(res: ApiResponse) {
    localStorage.setItem('access_token', res.token);
    this.setUser();
  }

  setUser() {
    this.user = this.jwtHelper.decodeToken(localStorage.getItem('access_token')).user as User;
  }

  isLoggedIn(): boolean {
    return this.jwtHelper.tokenGetter() && !this.jwtHelper.isTokenExpired();
  }

  getAuthority(): Authority {
    return this.user.authorities[0].type as Authority;
  }

  logout() {
    return this.httpClient.post<ApiResponse>(`${environment.API_URL}/logout`, null)
      .pipe(
        tap((res: ApiResponse) => res.success && this.postLogout(res))
      );
  }

  postLogout(res: ApiResponse) {
    localStorage.removeItem('access_token');
    this.user = null;
  }

  isAdmin(): boolean {
    return this.getAuthority() === Authority.ADMIN;
  }

  getUser(): User {
    return this.user;
  }

  register(user: User): Observable<ApiResponse> {
    return this.httpClient.post<ApiResponse>(`${environment.API_URL}/register`, user);
  }

}
