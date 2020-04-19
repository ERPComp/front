import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userForm: FormGroup;
  hide = true;

  constructor( private fb: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    // this.initializeForm();
  }
  // private initializeForm(){
  //   this.userForm = this.fb.group({
  //     login: ['', {
  //       validators: [Validators.required],
  //       asyncValidators: [this.userNameValidator]
  //     }],
  //     password: ['', Validators.required],
  //     email: ['', {
  //       validators: [Validators.email],
  //       asyncValidators: [this.userEmailValidator]
  //     }]
  //   });
  // }

  onRegisterClick() {
    // this.ngRedux.dispatch(registerAction(this.userForm.getRawValue()));
    this.onCancelClick();
  }
  get fullName(): FormControl {
    return this.userForm.get('fullName') as FormControl;
  }

  get login(): FormControl {
    return this.userForm.get('login') as FormControl;
  }

  get password(): FormControl {
    return this.userForm.get('password') as FormControl;
  }

  get confirmPassword(): FormControl {
    return this.userForm.get('password') as FormControl;
  }

  get email(): FormControl {
    return this.userForm.get('email') as FormControl;
  }

  getErrorText(controlName: string): string {
    const control = this.userForm.get(controlName) as FormControl;
    return this.getErrorMessage(control, controlName);
  }

  onCancelClick() {
    this.router.navigate(['home']);
  }

  private getErrorMessage(control: FormControl, controlName: string): string {
    let errorMessage = '';
    if (control.errors) {
      if (control.errors.required) {
        errorMessage = 'Field is required';
        return errorMessage;
      }
      if (control.errors.email) {
        errorMessage = 'Incorrect email';
        return errorMessage;
      }
    }
  }
}
