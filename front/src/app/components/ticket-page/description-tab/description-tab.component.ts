import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description-tab',
  templateUrl: './description-tab.component.html',
  styleUrls: ['./description-tab.component.css']
})
export class DescriptionTabComponent implements OnInit {

  pressed = true;
  private pressedTrue: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  OnEditIconClick(){
    this.pressed = ! this.pressed;
    this.pressedTrue = true;
  }

}
