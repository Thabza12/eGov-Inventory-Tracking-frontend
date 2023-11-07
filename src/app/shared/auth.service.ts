import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  private url ='http://localhost:8081/'
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
  login(empNumber:string,Empassword:string):Observable<any>{
    const credentials ={empNumber,Empassword};
    return this.http.post(this.url+'login',credentials);
  }
  register(data:any):Observable<any>{
   
    return this.http.post(this.url+'register',data,this.options);
  }
}
