export class Todo {
  userId: Number = 7;
  id?: Number;
  title: String = '';
  completed: Boolean = false;
}

export interface TodoState {
  err?: string;
  todolist: Todo[];
}
