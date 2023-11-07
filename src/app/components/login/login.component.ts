import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  empNumber ='';
  Empassword='';
  constructor(private authservice:AuthService){}

  login(){
    this.authservice.login(this.empNumber,this.Empassword).subscribe((response)=>{
      console.log(response+'Login successful')
    },(error)=>{
      console.log(error)
    });
  }

}
