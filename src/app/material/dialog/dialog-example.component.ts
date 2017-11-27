import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Dialog} from './dialog.model';

@Component({
  selector: 'app-dialog-example',
  templateUrl: 'dialog-example.component.html',
})
export class DialogExampleComponent implements OnInit {

  dialogModel: Dialog;

  constructor(public dialogRef: MatDialogRef<DialogExampleComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.dialogModel = new Dialog();
  }

  onClose(): void {
    console.log("onClose() => dialogModel = ");
    console.log(this.dialogModel);
    this.dialogRef.close();
  }

  onOk(): void {
    console.log("onOk() => dialogModel = ");
    console.log(this.dialogModel);
  }

}
