import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  private url = 'https://localhost:7065';
  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    let data = this.http.get(`${this.url}/WeatherForecast`);
    return data;
  }
  postData(body: any): Observable<any> {
    let data = this.http.post(`${this.url}/WeatherForecast/PostData`,body);
    return data;
  }
}
