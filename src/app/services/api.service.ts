import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = "http://localhost:8080"

  constructor(private http: HttpClient) { }

  login(user:any){
    return this.http.post(this.url+'/login',user);
  }

  setUser(user:any){
    console.log("set user ", user);
    
    localStorage.setItem('user',JSON.stringify(user));
    return true;
  }

  isLoggedIn(){
    let user = localStorage.getItem('user');

    if(user == null || user == undefined)return false;

    return true;
  }

  logout(){
    localStorage.removeItem('user');
    return true;
  }

}
