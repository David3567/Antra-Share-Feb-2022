import { TestBed } from '@angular/core/testing';

import { UserslistService } from './userslist.service';

describe('UserslistService', () => {
  let service: UserslistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserslistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
