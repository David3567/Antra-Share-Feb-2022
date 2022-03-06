import { TestBed } from '@angular/core/testing';

import { UserinforService } from './userinfor.service';

describe('UserinforService', () => {
  let service: UserinforService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserinforService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
