import { Component } from '@angular/core';
import { AnimeSeriesService } from './services/anime-series.service';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Top_Das_MyFavouriteAnimeSeries';
  contentId: number = 7;
  topContent: any = {};

  
  constructor(private AnimeSeriesService: AnimeSeriesService, private messageService: MessageService){}

  logId(){
    console.log(`ID: ${this.topContent.id}`);
    console.log(`Title: ${this.topContent.title}`);
  }

  ngOnInit(){
    this.AnimeSeriesService.getContentById(this.contentId).subscribe(content => this.topContent = content);
    this.messageService.addMessage(`Content item at id: ${this.contentId}`);
  }
}
