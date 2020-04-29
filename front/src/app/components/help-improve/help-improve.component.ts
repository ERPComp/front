import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-help-improve',
  templateUrl: './help-improve.component.html',
  styleUrls: ['./help-improve.component.css']
})
export class HelpImproveComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(public dialog: MatDialog,
              public dialogRef: MatDialogRef<HelpImproveComponent>) {}

  onSubmitClick(){

  }

  onCancelClick(){
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }

}
