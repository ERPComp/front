import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {HelpImproveComponent} from '../help-improve/help-improve.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']

})
export class ToolbarComponent implements OnInit {

  constructor(private router: Router,
              private matDialog: MatDialog) {
  }

  dashboardsCondition = true;
  projectsCondition = true;
  ticketsCondition = true;

  ngOnInit(): void {
  }

  onHomeClick(){
    this.router.navigate (['home']);
  }

  onDashboardsClick(){
    this.dashboardsCondition = !this.dashboardsCondition;

  }
  onProjectsClick(){
    this.projectsCondition = !this.projectsCondition;
  }
  onTicketsClick(){
    this.ticketsCondition = !this.ticketsCondition;
  }
  onCreateTicketsClick(){
    this.router.navigate (['create-ticket']);
  }

  onSearchClick(){

  }
  onHelpImproveClick(){
      this.matDialog.open(HelpImproveComponent);
  }
  onProfileClick(){
    this.router.navigate (['profile/1']);
  }
}
