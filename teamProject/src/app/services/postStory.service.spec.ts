/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PostStoryService } from './postStory.service';

describe('Service: PostStory', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostStoryService]
    });
  });

  it('should ...', inject([PostStoryService], (service: PostStoryService) => {
    expect(service).toBeTruthy();
  }));
});
