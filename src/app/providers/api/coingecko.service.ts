import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CoingeckoService {
  constructor(private http: HttpClient) {}

  getSearch(coin: any): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/search?query=${coin}`);
  }

  getCoin(coin: any): Observable<any> {
    console.log("COINCHECK");
    return this.http.get<any>(`${environment.apiUrl}/coins/${coin}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`);
  }
}
