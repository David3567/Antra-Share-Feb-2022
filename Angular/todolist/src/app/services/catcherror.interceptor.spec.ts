import { TestBed } from '@angular/core/testing';

import { CatcherrorInterceptor } from './catcherror.interceptor';

describe('CatcherrorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CatcherrorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CatcherrorInterceptor = TestBed.inject(CatcherrorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
