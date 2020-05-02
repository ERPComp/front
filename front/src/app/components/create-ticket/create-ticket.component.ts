import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface State {
  flag: string;
  name: string;
  population: string;
}
export interface User {
  name: string;
}

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent implements OnInit {

  createTicketForm: FormGroup;
  filteredStates: Observable<State[]>;
  filteredAssignees: Observable<User[]>;

  assignees: User[] = [
    {name: 'Mary'},
    {name: 'Shelley'},
    {name: 'Igor'}
  ];

  states: State[] = [
    {
      name: 'Arkansas',
      population: '2.978M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
    },
    {
      name: 'California',
      population: '39.14M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
    },
    {
      name: 'Florida',
      population: '20.27M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
    },
    {
      name: 'Texas',
      population: '27.47M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
    }
  ];


  constructor(private fb: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.initializeForm();
    this.testState();
    this.testAssignee();
  }

  testState(){
    this.filteredStates = this.createTicketForm.controls.ticketType.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this._filterStates(state) : this.states.slice())
      );
  }
  testAssignee(){
    this.filteredAssignees = this.createTicketForm.controls.assignee.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.assignees.slice())
      );
  }

  initializeForm(){
    this.createTicketForm = this.fb.group({
      project: [''],
      ticketType: [''],
      summary: [''],
      priority: [''],
      assignee: [''],
      component: [''],
      dueDate: [''],
      revision: [''],
      serverUrl: [''],
      description: [''],
      testCase: [''],
      labels: [''],
      watchers: [''],
      test: [''],
      myControl: new FormControl(),
      minDate: new Date(),

    });
  }
  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }
  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.assignees.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
  }

  onCreateTicketClick(){

  }

  onCancelTicketClick(){
    this.router.navigate(['home']);
  }
}
