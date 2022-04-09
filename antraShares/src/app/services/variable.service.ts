import { Comments } from 'src/app/interfaces/story.model';
export class VariableValue {
  baseUrl = 'http://localhost:4231/api';
  login: boolean = true;
  remove: string[] = [];

  start = 0;
  end = 4;
  size = 4;

  newComment: { id: string; cmt: Comments }[] = [];

  buildformPost() {
    return {
      image: [''],
      video: [''],
      text: [''],
    };
  }
  
  page = 1
  perpage = 5;
}
