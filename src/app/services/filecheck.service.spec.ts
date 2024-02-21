import { TestBed } from '@angular/core/testing';

import { FilecheckService } from './filecheck.service';

describe('FilecheckService', () => {
  let service: FilecheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilecheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
