import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = "http://localhost:8080"

  constructor(private http: HttpClient) { }

  login(user:any){
    return this.http.post(this.url+'/login',user);
  }

  register(user: any){
    console.log("register function service", user);
    
    return this.http.post(this.url+'/register',user);
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

  upload(file: any){
    console.log(file);
    const formData = new FormData();
    formData.append('file',file);
    
    const req = new HttpRequest('POST',this.url+"/upload",formData, {
      reportProgress: true,
      responseType: 'json'
    })

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get(this.url+'/files');
  }

  logout(){
    localStorage.removeItem('user');
    return true;
  }

}
