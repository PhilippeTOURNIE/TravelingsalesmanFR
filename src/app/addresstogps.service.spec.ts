import { TestBed } from '@angular/core/testing';

import { AddresstogpsService } from './addresstogps.service';

describe('AddresstogpsService', () => {
  let service: AddresstogpsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddresstogpsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
