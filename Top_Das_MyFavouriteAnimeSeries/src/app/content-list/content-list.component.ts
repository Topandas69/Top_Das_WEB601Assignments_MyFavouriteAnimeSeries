import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { AnimeSeriesService } from '../services/anime-series.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  contentsArray: Content[] = [];
  searchTitle: string = '';
  isTitleExist: boolean | null = null;

  logId(getContent: any){
    console.log(`ID: ${getContent.id}`);
    console.log(`Title: ${getContent.title}`);
  }

  searchByTitle(){
    this.isTitleExist = this.contentsArray.some(content => content.title === this.searchTitle);
  }

  constructor(private AnimeSeriesService: AnimeSeriesService){
  }

  ngOnInit(){
    this.AnimeSeriesService.getContent().subscribe(contentsArray => this.contentsArray = contentsArray);
  }

  addContent(newAnime: Content){
    this.AnimeSeriesService.addAnime(newAnime).subscribe(newAnimeBack => {
      this.contentsArray.push(newAnimeBack);
      this.contentsArray = [...this.contentsArray];
    });
  }
}
