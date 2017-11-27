import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';
import {DialogExampleComponent} from './dialog-example.component';

@Component({
  selector: 'app-open-dialog-example',
  templateUrl: 'open-dialog-example.component.html'
})
export class OpenDialogExampleComponent {

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogExampleComponent, {
      width: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("dialogRef.afterClosed() => result = ");
      if (result == 'OK') {
        //do something ...
        console.log(result);
      }
    });
  }
}
