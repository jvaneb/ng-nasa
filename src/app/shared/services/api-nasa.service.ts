import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from, switchMap } from 'rxjs';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiNasaService {

  private api_key = '0Hx8UHKwUQkUoiEJE6wFlWjbhZRZHcoTG5rfuq7L';
  api = environment.api_nasa;

  constructor(private httpClient: HttpClient) { }

  apiApod(count: number): Observable<any> {
    return from(this.getHeaders()).pipe(
      switchMap((headers) =>
        this.httpClient.get(
          `${this.api}/planetary/apod?api_key=${this.api_key}&count=${count}`,
          { headers }
        )
      )
    );
  }

  private async getHeaders(): Promise<HttpHeaders> {
    let headers = new HttpHeaders();
    headers = headers.set("Content-Type", "application/json");

    return headers;
  }
}
