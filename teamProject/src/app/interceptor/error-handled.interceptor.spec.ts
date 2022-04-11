import { TestBed } from '@angular/core/testing';

import { ErrorHandledInterceptor } from './error-handled.interceptor';

describe('ErrorHandledInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ErrorHandledInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ErrorHandledInterceptor = TestBed.inject(ErrorHandledInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
