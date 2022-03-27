/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AsyncValidatorService } from './asyncValidator.service';

describe('Service: AsyncValidator', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AsyncValidatorService]
    });
  });

  it('should ...', inject([AsyncValidatorService], (service: AsyncValidatorService) => {
    expect(service).toBeTruthy();
  }));
});
