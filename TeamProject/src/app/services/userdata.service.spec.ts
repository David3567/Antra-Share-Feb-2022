import { TestBed } from '@angular/core/testing';

import { userDataService } from './userdata.service';

describe('UserdataService', () => {
  let service: userDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(userDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
