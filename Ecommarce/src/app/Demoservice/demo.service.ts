import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient , HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  private url = 'https://localhost:7065';
  data!:[]
  constructor(private http: HttpClient) { }

    
  getWetherData() : Observable<any>{
    let data =  this.http.get(`${this.url}/WeatherForecast`);
    return data;
  }

  // postWhereData(name:string) : Observable<any>{
  //   // const headers = { 'Content-Type': 'application/json' };
  //   // let data =  this.requestData.post(`${this.url}/WeatherForecast/PostData`,name,{headers:headers});
  //   // return data;

  //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //   const data = { name: name };
  //   return this.requestData.post(`${this.url}/WeatherForecast/PostData`, JSON.stringify(data), { headers: headers });
  // }

  // postWhereData(name: string): Observable<any> {
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/json','accept' : '*/*' });
  //   const data = { name: name };
  
  //   return this.requestData.post(`${this.url}/WeatherForecast/PostData`, name, { headers: headers });
  // }
  
  postWhereData(name: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const data = { name: name };
    return this.http.post(`${this.url}/WeatherForecast/PostData`, JSON.stringify(data), { headers: headers});
  }

}
