import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { contentsArray } from '../helper-files/contentDb';

@Injectable({
  providedIn: 'root'
})
export class AnimeSeriesService {

  constructor() { }

  getContent(): Observable<Content[]>{
    return of(contentsArray);
  } 
}
