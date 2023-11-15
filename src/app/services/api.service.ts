import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { environment } from 'src/environments/environment';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }
  
  apiKey = 'ee2ba49ca14b3c3cecae4b7ab55e75c4';
  private baseUrl = `http://localhost:9898/`
  private kotUrl ='http://localhost:8081/';
  private mapBoxUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
  private accessToken = 'pk.eyJ1IjoibmVvemEiLCJhIjoiY2xvZnkwOTRiMHh1YTJrcndmam82em42aSJ9.DAxTwxCFRRjQ_BZ7y4ODgw';

  headers(){
    const _headers = new HttpHeaders({
      'accept': 'application/json',
      'apiKey': this.apiKey,
    });

    const httpOptions = {
      headers: _headers,
    }

    return httpOptions;

  }

  geocodeAddress(address: string): Observable<any>{
    const params = {
      access_token: this.accessToken,
    }

    return this._http.get<any>(`${this.mapBoxUrl}${encodeURIComponent(address)}.json`, {params});
  }

  

  getApi(url: string){
    return this._http.get<any>(this.baseUrl + url);
  }

  getApiKot(url: string){
    return this._http.get<any>(this.kotUrl + url);
  }

  putApiKot(url: string, body: any){
    return this._http.put<any>(this.kotUrl + url, body)
  }

  postApi(url: string, body: any){
    return this._http.post<any>(this.baseUrl + url, body);
  }

  login(empNumber: string, Empassword: string) {
    return this._http.post<any>(this.kotUrl + `login`, { empNumber, Empassword })
  }
  


}
