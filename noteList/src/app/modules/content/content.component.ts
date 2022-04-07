import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Note } from 'src/app/interfaces/note.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  noteForm!: FormGroup;
  @Input() display?: Note;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.setForm();
  }

  setForm() {
    this.noteForm = this.fb.group({
      title: [''],
      content: ['']
    });
  }

  onSave() {
    console.log(this.display);
  }



}
