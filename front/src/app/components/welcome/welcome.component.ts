import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private matDialog: MatDialog,
              private router: Router) { }

  ngOnInit(): void {
  }
  onRegisterClick() {
    // this.onCancelClick();
    setTimeout(() => this.router.navigate(['register']));
  }
  onLoginClick() {
    this.matDialog.open(LoginComponent);
  }
  onLogoutClick() {
    // this.ngRedux.dispatch(logoutUserAction());
    this.router.navigate(['home']);
  }
}
