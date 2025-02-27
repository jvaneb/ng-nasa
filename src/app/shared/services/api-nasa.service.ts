import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from, switchMap } from 'rxjs';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiNasaService {

  key = environment.api_key;
  apiApod = environment.api_nasa;
  apiExoplanets = environment.api_exoplanets;

  constructor(private httpClient: HttpClient) { }

  apodLimit(count: number): Observable<any> {
    return this.httpClient.get(
      `${this.apiApod}/planetary/apod?api_key=${this.key}&count=${count}`
    )
  }

  apodDate(date: any): Observable<any> {
    return this.httpClient.get(
      `${this.apiApod}/planetary/apod?api_key=${this.key}&date=${date}`
    )
  }

  exoplanetsAll(): Observable<any> {
    return this.httpClient.get(
      `${this.apiExoplanets}?table=cumulative&format=json&where=koi_prad<2%20and%20koi_teq>180%20and%20koi_teq<303%20and%20koi_disposition='CONFIRMED'`
    )
  }
}
