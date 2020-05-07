import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {RegistrationComponent} from '../registration/registration.component';
import { LoginService } from 'src/app/shared/loginService';

/** Error when invalid control is dirty, touched, or submitted. */


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentialForm: FormGroup;
  hide = true;

  constructor(private fb: FormBuilder,
              public dialogRef: MatDialogRef<LoginComponent>,
              private matDialog: MatDialog,
              private router: Router,
              private loginService:LoginService) {
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  get login() {
    return this.credentialForm.get('login') as FormControl;
  }

  get password() {
    return this.credentialForm.get('password') as FormControl;
  }

  private initializeForm() {
    this.credentialForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onCancelClick() {
     this.dialogRef.close();
  }

  getErrorText(controlName: string): string {
    const control = this.credentialForm.get(controlName) as FormControl;
    return this.getErrorMessage(control);
  }

  private getErrorMessage(control: FormControl): string {
    let errorMessage = '';
    if (control.errors) {
      if (control.errors.required) {
        errorMessage = 'Field is required';
      }
      if (control.errors.email) {
        errorMessage = 'Incorrect email';
      }
    }
    return errorMessage;
  }
  username:string
  hashPassword:string

  OnLogin(){
    localStorage.removeItem('auth_token');
    console.log(localStorage.getItem('auth_token'))
    this.loginService.login(this.username,this.hashPassword).subscribe(response=>{
      localStorage.setItem('auth_token', response.headers.get('Authorization'));
        this.dialogRef.close();
      })
  }

  onRegisterClick() {
    this.onCancelClick();
    setTimeout(() => this.matDialog.open(RegistrationComponent));
  }


}
