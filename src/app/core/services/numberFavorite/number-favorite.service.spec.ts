import { TestBed } from '@angular/core/testing';

import { NumberFavoriteService } from './number-favorite.service';

describe('NumberFavoriteService', () => {
  let service: NumberFavoriteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumberFavoriteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
