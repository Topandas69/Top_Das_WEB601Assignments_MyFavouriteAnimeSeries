import { Component, EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent {
  newContent: any = {};
  @Output() onCreation = new EventEmitter<Content>();

  addContent(){
    this.onCreation.emit(this.newContent);
    this.newContent = {};
  }
}
