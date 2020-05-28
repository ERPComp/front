import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {RegistrationComponent} from '../registration/registration.component';


/** Error when invalid control is dirty, touched, or submitted. */


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder,
              public dialogRef: MatDialogRef<LoginComponent>,
              private matDialog: MatDialog,
              private router: Router,
             ) {
  }

  get login() {
    return this.credentialForm.get('login') as FormControl;
  }

  get password() {
    return this.credentialForm.get('password') as FormControl;
  }
  credentialForm: FormGroup;
  hide = true;

  ngOnInit(): void {
    this.initializeForm();
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

  onRegisterClick() {
    this.onCancelClick();
    setTimeout(() => this.matDialog.open(RegistrationComponent));
  }


}
