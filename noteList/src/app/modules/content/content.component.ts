import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Note } from 'src/app/interfaces/note.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit, OnChanges {
  @Input() noteInfo?: Note;

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
    this.noteForm.get('title')?.setValue(this.noteInfo?.title);
    this.noteForm.get('content')?.setValue(this.noteInfo?.content);
  }

  onRevert() {
    console.log('noteInfo', this.noteInfo);
  }

  onSave() {
    console.log('value', this.noteForm.value);
  }
}
