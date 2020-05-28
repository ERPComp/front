import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {HelpImproveComponent} from '../help-improve/help-improve.component';
import {MatMenuTrigger} from '@angular/material/menu';
import {RegistrationComponent} from '../registration/registration.component';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']

})
export class ToolbarComponent implements OnInit {

  constructor(private router: Router,
              private matDialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  onHomeClick(){
    this.router.navigate (['home']);
  }

  onDashboardsClick(){
    this.router.navigate (['dash/1']);
  }
  onProjectsClick(){
    this.router.navigate (['project/1']);
  }
  onTicketsClick(){
    this.router.navigate (['ticket/1']);
  }
  onCreateTicketsClick(){
    this.router.navigate (['create-ticket/1']);
  }

  onSearchClick(){
    this.router.navigate (['search']);
  }
  onHelpImproveClick(){
      this.matDialog.open(HelpImproveComponent);
  }
  onProfileClick(){
    this.router.navigate (['profile/1']);
  }
}
