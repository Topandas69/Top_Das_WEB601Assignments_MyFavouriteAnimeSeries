import { Component } from '@angular/core';
import { AnimeSeriesService } from './services/anime-series.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Top_Das_MyFavouriteAnimeSeries';
  topContent: any = {};

  
  constructor(private AnimeSeriesService: AnimeSeriesService){}

  logId(){
    console.log(`ID: ${this.topContent.id}`);
    console.log(`Title: ${this.topContent.title}`);
  }

  ngOnInit(){
    const content = this.AnimeSeriesService.getContentById(7).subscribe(content => this.topContent = content);
  }
}
