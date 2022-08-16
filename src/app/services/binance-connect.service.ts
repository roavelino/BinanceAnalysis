import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Endpoints } from '../endpoints/endpoints';
import { Ticker } from '../models/ticker';

@Injectable({
  providedIn: 'root',
})


export class BinanceConnectService {

  constructor(private http: HttpClient) {}

  get24Ticker(symbol: string = '') {
    symbol = 'BNBBTC';
    return this.http
      .get<Array<Ticker>>(environment.baseUrl + Endpoints.Ticker24h + '?symbol=BNBBTC')
      .pipe(map((response: Array<Ticker>) => response));
  }
}
