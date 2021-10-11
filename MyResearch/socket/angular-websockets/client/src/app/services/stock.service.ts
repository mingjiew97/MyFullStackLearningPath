import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {webSocket, WebSocketSubject} from 'rxjs/webSocket';
import {SocketStatus} from '../utils/socket-status.enum';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  socket$: WebSocketSubject<string>;
  status: SocketStatus;
  seclectedStocksList = new Set<string>();

  constructor(
    private http: HttpClient
  ) {
    this.connect();
  }

  getStocksList(): Observable<string[]> {
    return this.http.get<string[]>(`${environment.API_URL}/stocks`);
  }

  connect() {
    this.socket$ = webSocket(environment.SOCKET_URL);
    this.status = SocketStatus.CONNECTED;
    this.socket$.next(JSON.stringify(Array.from(this.seclectedStocksList)));
    this.socket$.subscribe(null, () => {
      this.status = SocketStatus.NOT_CONNECTED;
    }, () => {
      this.status = SocketStatus.NOT_CONNECTED;
    });
  }

  disconnect() {
    this.socket$.complete();
  }
}
