import { TestBed } from '@angular/core/testing';

import { TodoInterceptor } from './todo.interceptor';

describe('TodoInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TodoInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TodoInterceptor = TestBed.inject(TodoInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
