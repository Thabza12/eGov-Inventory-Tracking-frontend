import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  public form = 
  {
    EmpNumber:null,
    Name:null,
    MiddleName:null,
    Surname :null,
    email :null,
    phoneNumber :null,
    password :null
  }
  constructor(private authService:AuthService){}
  register(){
    this.authService.register(this.form).subscribe((response)=>{
      console.log(response);
    },(error)=>{
      console.log(error);
    });
  }

}
