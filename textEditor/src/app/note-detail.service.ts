import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Note } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class NoteDetailService {
  noteDetailEmitter = new Subject<Note>();
  newNoteTemplateEmitter = new Subject<Note>();  
  

  constructor() { }

}
