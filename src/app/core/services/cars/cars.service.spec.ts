import { TestBed } from '@angular/core/testing';

import { CarsService } from './facturas.service';

describe('CarsService', () => {
  let service: CarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
