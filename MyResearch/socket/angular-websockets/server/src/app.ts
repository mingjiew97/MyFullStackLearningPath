import express, {Application, Request, Response} from 'express';
import * as http from 'http';
import {Server} from 'http';
import * as WebSocket from 'ws';
import {WebSocketEvent} from './WebSocketEvent';
import {StockGen} from './stocks/StockGen';
import {Stock} from './stocks/Stock';
import {Subscription} from 'rxjs';
import cors from 'cors';

const app: Application = express();

app.use(cors());

app.use('/health', (req: Request, res: Response) => {
  res.send('it works!');
});

app.get('/stocks', (req: Request, res: Response) => {
  res.send(StockGen.getStocksList());
});

const server: Server = http.createServer(app);

// websocket server
const wss: WebSocket.Server = new WebSocket.Server({
  server: server
});

wss.on(WebSocketEvent.CONNECTION, (ws: WebSocket) => {
  const sg = new StockGen();

  const sgSub: Subscription = sg.generator.subscribe((stocks: Stock[]) => {
    if(ws.readyState == WebSocket.OPEN) {
      ws.send(JSON.stringify(stocks));
    } else {
      sgSub.unsubscribe();
    }
  }, (err) => {
    console.log(err);
  });
  ws.on(WebSocketEvent.MESSAGE, (message: string) => {
    // message is a set of selected stocks(string format)
    sg.selectStock(new Set(JSON.parse(JSON.parse(message))));
  });
});

server.listen(3000);