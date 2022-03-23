import { TestBed } from '@angular/core/testing';

import { SidenevService } from './sidenev.service';

describe('SidenevService', () => {
  let service: SidenevService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidenevService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
