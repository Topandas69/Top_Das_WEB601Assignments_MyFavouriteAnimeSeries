import { TestBed } from '@angular/core/testing';

import { AnimeSeriesService } from './anime-series.service';

describe('AnimeSeriesService', () => {
  let service: AnimeSeriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimeSeriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
