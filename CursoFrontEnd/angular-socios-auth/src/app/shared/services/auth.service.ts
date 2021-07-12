import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  URI={
    login:"login",
    register:"register"
  }

  headers: HttpHeaders = new HttpHeaders({
    'Content-type':'application/json'
  })

  constructor(private http:HttpClient) { }

  registerUser$(user:User):Observable<any>{
    return this.http.post<User>(environment.api_url.concat(this.URI.register),user,{headers: this.headers})
  }

  setToken(token:any){
    sessionStorage.setItem('accessToke',token);
  }
}
