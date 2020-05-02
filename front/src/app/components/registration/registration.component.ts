import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  enabled = false;
  hide = true;

  constructor(public dialog: MatDialog, private fb: FormBuilder,
              public dialogRef: MatDialogRef<RegistrationComponent>) { }

  initForm(){
    this.registrationForm = this.fb.group({
      fullName: ['', [
        Validators.required,
        Validators.pattern(/[A-z]/),
        Validators.minLength(4)]
      ],
      loginName: ['', [
        Validators.required]
      ],
      passwordName: ['', [
        Validators.required,
        Validators.minLength(8)]
      ],
      confirmPasswordName: ['', [
        Validators.required,
        Validators.minLength(8)]
      ],
      emailName: ['', [
        Validators.required,
        Validators.email]
      ],
    });
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.registrationForm.controls[controlName];
    const result = control.invalid && control.touched;
    return result;
  }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    const pass = group.get('password').value;
    const confirmPass = group.get('confirmPass').value;
    return pass === confirmPass ? null : { notSame: true };
  }

  ngOnInit(): void {
       this.initForm();
  }

  onRegistrationClick(){
    const controls = this.registrationForm.controls;
    /* Проверяем форму на валидность */
    if (this.registrationForm.invalid) {
      /* Если форма не валидна, то помечаем все контролы как touched*/
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());
      return;
    }
    /* Обработка данных формы */
    console.log(this.registrationForm.value);
  }
  onCancelClick(){
    this.dialogRef.close();
  }

}
