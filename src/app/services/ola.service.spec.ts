import { TestBed } from '@angular/core/testing';

import { OlaService } from './ola.service';

describe('OlaService', () => {
  let service: OlaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OlaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
