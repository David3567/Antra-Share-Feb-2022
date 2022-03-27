import { Comments, Story } from 'src/app/interfaces/story.model';
export class VariableValue {
  login: boolean = true;
  remove: string[] = [];

  start = 0;
  end = 4;
  size = 4;

  newComment: [{ id?: string; cmt?: Comments }]=[{}];

}
