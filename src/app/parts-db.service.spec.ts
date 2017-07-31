import { TestBed, inject } from '@angular/core/testing';

import { PartsDbService } from './parts-db.service';

describe('PartsDbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PartsDbService]
    });
  });

  it('should be created', inject([PartsDbService], (service: PartsDbService) => {
    expect(service).toBeTruthy();
  }));
});
