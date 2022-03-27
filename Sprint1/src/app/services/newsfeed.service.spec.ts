/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NewsfeedService } from './newsfeed.service';

describe('Service: Newsfeed', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsfeedService]
    });
  });

  it('should ...', inject([NewsfeedService], (service: NewsfeedService) => {
    expect(service).toBeTruthy();
  }));
});
