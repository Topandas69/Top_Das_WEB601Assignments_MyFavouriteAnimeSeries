import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimeSeriesService } from '../services/anime-series.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent {
  contentId: number = 7;
  topContent: any = {};

  constructor(private route:ActivatedRoute,private AnimeSeriesService: AnimeSeriesService){}

  logId(){
    console.log(`ID: ${this.topContent.id}`);
    console.log(`Title: ${this.topContent.title}`);
  }

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.contentId = Number(params.get('id') ?? 0);
      
      this.AnimeSeriesService.getContentById(this.contentId).subscribe(content => this.topContent = content);
    });
  }
}
