import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public form = new UntypedFormGroup({})


  constructor(private authService: AuthService,
    private _router: Router) { }

  ngOnInit(): void {
    this.form = new UntypedFormGroup({
      'EmpNumber': new UntypedFormControl(),
      'Name': new UntypedFormControl(),
      'MiddleName': new UntypedFormControl(),
      'Surname': new UntypedFormControl(),
      'email': new UntypedFormControl(),
      'phoneNumber': new UntypedFormControl(),
      'password': new UntypedFormControl(),
    })

  }

  register(form: UntypedFormGroup) {
    const body = {
      EmpNumber: form.value.EmpNumber,
      Name: form.value.Name,
      MiddleName: form.value.MiddleName,
      Surname: form.value.Surname,
      email: form.value.email,
      phoneNumber: form.value.phoneNumber,
      password: form.value.password,
    }

    this.authService.register(body).subscribe((response) => {
      // console.log(response);
      // this.handleResponse(response);
      this._router.navigate(['/assets']);
    }, (error) => {
      console.log(error);
    });
  }

  // handleResponse(data: any){
  //   this.authService.handleToken(data);
  //   this._router.navigate(['/assets']);
  // }

}
