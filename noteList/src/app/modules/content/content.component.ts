import {
  Component,
  Input,
  Output,
  OnChanges,
  OnInit,
  SimpleChanges,
  EventEmitter,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Note } from 'src/app/interfaces/note.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit, OnChanges {
  @Input() note?: Note;
  @Input() index?: number;
  @Output() sendNote = new EventEmitter<Note>();

  noteForm = new FormGroup({
    title: new FormControl(''),
    content: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(
    //   changes['noteInfo'].previousValue,
    //   changes['noteInfo'].currentValue
    // );
    this.noteForm.get('title')?.setValue(this.note?.title);
    this.noteForm.get('content')?.setValue(this.note?.content);
  }

  onRevert() {
    this.noteForm.get('title')?.setValue(this.note?.title);
    this.noteForm.get('content')?.setValue(this.note?.content);
    alert('Changes was reversed.');
  }

  onSave() {
    this.note = this.noteForm.value;
    this.sendNote.emit({ index: this.index, ...this.noteForm.value });
    alert('Changes was saved.');
  }
}
