import { Component, EventEmitter, Output, inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { AddContentDialogComponent } from '../add-content-dialog/add-content-dialog.component';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent {
  newContent: any = {};
  @Output() onCreation = new EventEmitter<Content>();

  constructor(public dialog:MatDialog){

  }
  openDialog():void{
    const dialogRef = this.dialog.open(AddContentDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.newContent = result;
      this.addContent();
    });
  }
  addContent(){
    this.onCreation.emit(this.newContent);
    this.newContent = {};
  }
}
