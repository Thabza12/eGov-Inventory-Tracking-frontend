import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { SnackbarService } from 'src/app/shared/snackbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form = new FormGroup({
    empNumber:  new FormControl(null, Validators.required),
    Empassword:  new FormControl(null, Validators.required),
  });

  // public error = null;

  constructor(private authservice: AuthService, 
    private _router: Router, 
    private _snackbar: SnackbarService) { }

  // login() {
  //   this.authservice.login(this.empNumber, this.Empassword).subscribe((response) => {
  //     console.log(response + 'Login successful')
  //   }, (error) => {
  //     console.log(error)
  //   });
  // }

  onSubmit() {

    if (this.form.invalid) {
      return;
    }

    this.authservice.login(this.form.get('empNumber')?.value, this.form.get('Empassword')?.value).subscribe(
      (response) => {
        // console.log(response)
        // this.handleResponse(response)
        this._snackbar.openSnackbar("Login successful...", response)
        this._router.navigate(['/assets']);
        
      }
    )
  }

  // handleResponse(data: any){
  //   this.authservice.handleToken(data);
  //   this.authservice.changeAuthStatus(true);
  //   this._router.navigate(['/assets']);
  // }

  // handleError(error:any){
  //   this.error = error.error.error;
  // }

}
