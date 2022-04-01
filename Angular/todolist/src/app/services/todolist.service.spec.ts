import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { TodolistService } from './todolist.service';
import { of } from 'rxjs';
import { Todo } from '../interfaces/todo.model';

describe('TodolistService', () => {
  let service: TodolistService;
  let httpTestingController: HttpTestingController;

  const todos: Todo[] = [
    {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: 'quis ut nam facilis et officia qui',
      completed: false,
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodolistService],
      imports: [HttpClientTestingModule],
    });

    service = TestBed.inject(TodolistService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get todos via getTodos method', () => {
    spyOn(service, 'getTodos').withArgs().and.returnValue(of(todos));

    service.getTodos().subscribe((data) => {
      // console.log('called');
      expect(data.length).toBe(2);
      expect(data).toEqual(todos);
    });
    expect(service.getTodos).toHaveBeenCalled();
  });

  it('should send post request to backend after run addTodo', () => {
    const todo: Todo = {
      userId: 2,
      id: 24,
      title: 'adipisci non ad dicta qui amet quaerat doloribus ea',
      completed: false,
    };
    service.addTodo(todo).subscribe((data) => {
      console.log(123);
    });
    const req = httpTestingController.expectOne(
      [service.baseUrl, service.path].join('/')
    );
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(todo);
  });

  it('should get res after call addTodo', () => {
    const todo: Todo = {
      userId: 2,
      id: 24,
      title: 'adipisci non ad dicta qui amet quaerat doloribus ea',
      completed: false,
    };

    spyOn(service, 'addTodo').withArgs(todo).and.returnValue(of(todo));

    service.addTodo(todo).subscribe((data) => {
      expect(data).toEqual(todo);
    });
  });

  it('should send delete request to backend after run deleteTodo', () => {
    const id = '3';

    service.deleteTodo(id).subscribe((data) => {
      console.log('called');
    }, fail);

    const req = httpTestingController.expectOne(
      [service.baseUrl, service.path, id].join('/') // <-- expected id
    );

    expect(req.request.method).toEqual('DELETE');
  });
});
