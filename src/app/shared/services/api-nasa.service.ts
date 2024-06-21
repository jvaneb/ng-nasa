import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from, switchMap } from 'rxjs';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiNasaService {

  key = environment.api_key;
  api = environment.api_nasa;

  constructor(private httpClient: HttpClient) { }

  apiApod(count: number): Observable<any> {
    return from(this.getHeaders()).pipe(
      switchMap((headers) =>
        this.httpClient.get(
          `${this.api}/planetary/apod?api_key=${this.key}&count=${count}`,
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
