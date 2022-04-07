import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Note } from '../app.component';
import { NoteDetailService } from '../note-detail.service';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.css']
})
export class NoteDetailsComponent implements OnInit {
  note: Note = {title: '', content: ''};
  noteOnDisplay: Note = {...this.note};
  noteDetailSubscriber: Subscription;
  newNoteSubscriber: Subscription;
  @Output() newNoteEmitter = new EventEmitter<Note>();
  

  constructor(private detailsService: NoteDetailService) { }

  ngOnInit(): void {
    this.noteDetailSubscriber = this.detailsService.noteDetailEmitter.subscribe((note: Note) => {
      this.note = note;
      this.noteOnDisplay = {...this.note};
    });
    
    this.newNoteSubscriber = this.detailsService.newNoteTemplateEmitter.subscribe((note: Note) => {
      this.note = note;
    });
  }

  ngOnDestroy() {
    this.noteDetailSubscriber.unsubscribe();
    this.newNoteSubscriber.unsubscribe();
  }

  onRevert() {
    this.noteOnDisplay = this.note;
  }

  onSave(form: FormControl) {
    this.newNoteEmitter.emit({
      'title': form.value.title,
      'content': form.value.content
    });
    this.note = {title: '', content: ''};
  }

}
