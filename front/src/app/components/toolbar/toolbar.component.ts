import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']

})
export class ToolbarComponent implements OnInit {

  constructor() {
  }

  dashboardsCondition = true;
  projectsCondition = true;
  ticketsCondition = true;

  ngOnInit(): void {
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

  }

  onSearchClick(){

  }
  onFeedbackClick(){

  }
  onProfileClick(){
  }
}
