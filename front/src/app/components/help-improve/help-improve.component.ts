import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {FormControl, Validators} from '@angular/forms';
import {ModalWindowComponent} from '../modal-window/modal-window.component';

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
  summaryFormControl = new FormControl('', [
    Validators.required,
  ]);

  constructor(public matDialog: MatDialog,
              public dialogRef: MatDialogRef<HelpImproveComponent>) {}

  onSubmitClick(){
    this.dialogRef.close();
    this.matDialog.open(ModalWindowComponent);
  }

  onCancelClick(){
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }

}
