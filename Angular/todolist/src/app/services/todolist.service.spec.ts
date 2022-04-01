import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { TodolistService } from './todolist.service';

describe('TodolistService', () => {
  let service: TodolistService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodolistService],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(TodolistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
