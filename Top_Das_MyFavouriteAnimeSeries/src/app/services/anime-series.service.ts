import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { contentsArray } from '../helper-files/contentDb';
import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnimeSeriesService {
  private httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json"})
  }

  constructor(private http:HttpClient,  private messageService: MessageService) { }

  getContent(): Observable<Content[]>{
    this.messageService.addMessage("Content array loaded!");
    return this.http.get<Content[]>('/api/animes');
  }

  getContentById(id: number): Observable<any> {
    const content = contentsArray.find(c => c.id === id);
    this.messageService.addMessage(`Content item at id: ${id}`);
    return of(content);
  }

  addAnime(newAnime: Content){
    this.messageService.addMessage(`New Anime Content added`);
    return this.http.post<Content>("/api/animes", newAnime, this.httpOptions);
  }
}
