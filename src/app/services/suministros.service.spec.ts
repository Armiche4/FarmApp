import { TestBed } from '@angular/core/testing';

import { SuministrosService } from './suministros.service';

describe('SuministrosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SuministrosService = TestBed.get(SuministrosService);
    expect(service).toBeTruthy();
  });
});
