import { TestBed } from '@angular/core/testing';

import { RubberTableService } from './rubber-table.service';

describe('RubberTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RubberTableService = TestBed.get(RubberTableService);
    expect(service).toBeTruthy();
  });
});
