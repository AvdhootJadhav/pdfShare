import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  
  isLoggedIn: boolean = false;
  message = '';
  selectedFiles?: FileList;

  fileInfos?: Observable<any>;

  constructor(private service: ApiService, private router: Router){
    this.isLoggedIn = service.isLoggedIn();
  }

  handleLogout(){
    this.service.logout();
    window.location.href='';
  }

  handleLogin(){
    this.router.navigate(['/login'])
  }

  selectFiles(event:any){
    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles);
    
  }

  upload(){
    if(this.selectedFiles){
      const file: File | null= this.selectedFiles.item(0);

      if(file){
        this.service.upload(file).subscribe({
          next: (event: any)=>{
            if(event instanceof HttpResponse){
              this.message = event.body.message;
              this.fileInfos = this.service.getFiles()
            }
          },
          error: (err:any)=>{
            console.log(err);
          }
        }
        );
        this.selectedFiles = undefined;
        alert("File added");
        window.location.reload();
      }
    }
  }

  handleFileSubmit(){}

}
