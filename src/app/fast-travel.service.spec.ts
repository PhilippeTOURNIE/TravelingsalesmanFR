import { TestBed } from '@angular/core/testing';

import { FastTravelService } from './fast-travel.service';

describe('FastTravelService', () => {
  let service: FastTravelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FastTravelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
