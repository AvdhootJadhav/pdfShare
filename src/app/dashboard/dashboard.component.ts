import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  
  isLoggedIn: boolean = false;

  constructor(private service: ApiService, private router: Router){
    this.isLoggedIn = service.isLoggedIn();
  }

  handleLogout(){
    this.service.logout();
    window.location.reload();
  }

  handleLogin(){
    this.router.navigate(['/login'])
  }

}
