import { TestBed } from '@angular/core/testing';

import { CarApiServiceService } from './car-api.service';

describe('CarApiServiceService', () => {
  let service: CarApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
