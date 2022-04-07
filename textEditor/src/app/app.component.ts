import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { NoteDetailService } from './note-detail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'text_editor';
  isForEdit: boolean = false;

  notesList: Note[] = [
    {title: 'Title A', content: "test"},
    {title: 'Title B', content: "test 2"},
];

  constructor(private noteDetailsService: NoteDetailService) {}

  ngOnInit() {}

  ngOnDestroy() {}
  
  onNewNote() {
    this.noteDetailsService.newNoteTemplateEmitter.next({'title': "", 'content': ""});
    this.isForEdit = false;
  }

  prepForEdit(edit: boolean) {
    this.isForEdit = true;
  }

  onSaveNewNote(newNote: Note) {
    if(this.isForEdit) {
      this.notesList.map((note) => {
        if(note.title === newNote.title) {
          note = newNote;
        }
      })
    } else {
      this.notesList.push(newNote);
    }

    this.isForEdit = false;
  }

  onDeleteNote(index: number) {
    this.notesList.splice(index, 1);
  }
}

export interface Note {  
  title: string;
  content: string;
}