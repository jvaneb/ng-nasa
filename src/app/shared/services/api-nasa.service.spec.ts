import { TestBed } from '@angular/core/testing';

import { ApiNasaService } from './api-nasa.service';

describe('ApiNasaService', () => {
  let service: ApiNasaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiNasaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
