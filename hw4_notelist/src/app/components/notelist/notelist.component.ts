import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/interfaces/note.interface';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-notelist',
  templateUrl: './notelist.component.html',
  styleUrls: ['./notelist.component.scss']
})
export class NotelistComponent implements OnInit {

  notelist!: Note[];

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.notelist = this.noteService.getNotes();
  }

  showForm() {
    console.log('show form');
  }

  addNote() {
    this.noteService.addNote();
    console.log(this.notelist);
  }

  showDetail(id: number) {
    for (let i = 0; i < this.notelist.length; i++) {
      if (this.notelist[i].id === id) {
        console.log(this.notelist[i].description);
      }
    }
  }

  deleteNote(id: number) {
    console.log(id);
    for (let i = 0; i < this.notelist.length; i++) {
      if (this.notelist[i].id === id) {
        this.notelist.splice(i, 1);
      }
    }
  }

}
