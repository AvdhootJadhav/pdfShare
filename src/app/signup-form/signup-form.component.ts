import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})

export class SignupFormComponent {
  hide = true

  user = {
    name: '',
    password: '',
    email: '',
    roles: 'ROLE_USER'
  }

  constructor(private service: ApiService){}

  register(){
    console.log(this.user);
    
    this.service.register(this.user).subscribe(
      response => {
        console.log(response);
        window.location.href=''
      },
      err => {
        console.log("error ",err);
      }
    )
  }
}
