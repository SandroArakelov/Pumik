import { TestBed } from '@angular/core/testing';

import { FentyService } from './fenty.service';

describe('FentyService', () => {
  let service: FentyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FentyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
