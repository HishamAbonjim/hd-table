import { TestBed, inject } from '@angular/core/testing';

import { InputsTableService } from './inputs-table.service';

describe('InputsTableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InputsTableService]
    });
  });

  it('should be created', inject([InputsTableService], (service: InputsTableService) => {
    expect(service).toBeTruthy();
  }));
});
