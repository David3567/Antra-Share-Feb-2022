import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from '../app.component';
import { NoteDetailService } from '../note-detail.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {
  @Input() note: Note;
  @Input() index: number;
  @Output() deleteNoteEmitter = new EventEmitter<number>();
  @Output() editEmitter = new EventEmitter<boolean>();

  constructor(private detailsService: NoteDetailService) { }

  ngOnInit(): void {
  }

  onDisplay() {
    this.editEmitter.emit(true);
    this.detailsService.noteDetailEmitter.next(this.note);    
  }

  deleteNote() {
    this.deleteNoteEmitter.emit(this.index);
  }

}
