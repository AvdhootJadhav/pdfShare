import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  hide: boolean = true

  user = {
    name: '',
    password: ''
  }

  constructor(private service: ApiService){}

  onSubmit(){

    console.log(this.user);
    

    if(this.user.name!='' && this.user.password!='' && this.user.name!=null && this.user.password!=null){
      console.log("Form submit kro");
      this.service.login(this.user).subscribe(
        response => {
          console.log(response);
          this.service.setUser(response)
          window.location.href='/dashboard'
        },
        err => {}
      )
    }
    else{
      console.log("Fields are empty");
      
    }
  }

}
