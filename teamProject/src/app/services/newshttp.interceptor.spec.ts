import { TestBed } from '@angular/core/testing';

import { NewsHttpInterceptor } from './newshttp.interceptor';

describe('HttpInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      NewsHttpInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: NewsHttpInterceptor = TestBed.inject(NewsHttpInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
