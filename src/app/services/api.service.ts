import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { environment } from 'src/environments/environment';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }
  
  apiKey = 'ee2ba49ca14b3c3cecae4b7ab55e75c4';
  private baseUrl = `http://localhost:9898/`
<<<<<<< HEAD
  private kotUrl ='http://localhost:8081/'

=======
  private kotUrl ='http://localhost:8081/';
>>>>>>> 13f238e2a861b95fc1d0540d1654aaeb1082e874

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

  

  getApi(url: string){
    return this._http.get<any>(this.baseUrl + url);
  }

  getApiKot(url: string){
    return this._http.get<any>(this.kotUrl + url);
  }

  postApi(url: string, body: any){
    return this._http.post<any>(this.baseUrl + url, body);
  }

  login(empNumber: string, Empassword: string) {
    return this._http.post<any>(this.kotUrl + `login`, { empNumber, Empassword })
  }
  


}
