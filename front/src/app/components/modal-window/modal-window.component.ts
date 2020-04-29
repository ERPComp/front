import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css']
})
export class ModalWindowComponent implements OnInit {

  constructor(public dialog: MatDialog,
              public dialogRef: MatDialogRef<ModalWindowComponent>) { }

  ngOnInit(): void {
  }

  onOkClick(){
    this.dialogRef.close();
  }

}
