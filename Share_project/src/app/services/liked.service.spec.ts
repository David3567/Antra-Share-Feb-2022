import { TestBed } from '@angular/core/testing';

import { LikedService } from './liked.service';

describe('LikedService', () => {
  let service: LikedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LikedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
