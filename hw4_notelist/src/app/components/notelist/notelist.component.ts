import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Note } from 'src/app/interfaces/note.interface';

@Component({
  selector: 'app-notelist',
  templateUrl: './notelist.component.html',
  styleUrls: ['./notelist.component.scss']
})
export class NotelistComponent implements OnInit {

  notes: Note[] = [];
  title!: string;
  description!: string;

  isAdding: boolean = true;
  newId: number = 1;
  updateId!: number;
  updateIndex!: number;

  noteForm = new FormGroup ({
    title: new FormControl(this.title, [Validators.required]),
    description: new FormControl(this.description, [Validators.required])
  });

  constructor() {}

  ngOnInit() {}

  clearForm() {
    this.noteForm.controls['title'].setValue('');
    this.noteForm.controls['description'].setValue('');
  }
  
  deleteNote(id: number) {
    for (let i = 0; i < this.notes.length; i++) {
      if (this.notes[i].id === id) {
        this.notes.splice(i, 1);
      }
    }
  }

  onSubmit() {
      let newNote: Note = {
        id: this.newId,
        title: this.noteForm.value.title,
        description: this.noteForm.value.description
      }
      this.notes.push(newNote);
      this.newId = this.newId + 1;
      this.clearForm();
      console.log(this.notes);
  }

  showDetail(id: number) {
    for (let i = 0; i < this.notes.length; i++) {
      if (this.notes[i].id === id) {
        this.noteForm.controls['title'].setValue(this.notes[i].title);
        this.noteForm.controls['description'].setValue(this.notes[i].description);
        this.isAdding = false;
        this.updateId = id;
        this.updateIndex = this.notes.findIndex(obj => {
          return obj.id === this.updateId;
        });
      }
    }
  }

  edit() {
    this.notes[this.updateIndex].title = this.noteForm.value.title;
    this.notes[this.updateIndex].description = this.noteForm.value.description;
    this.clearForm();
  }


  reset() {
    this.noteForm.controls['title'].setValue(this.notes[this.updateIndex].title);
    this.noteForm.controls['description'].setValue(this.notes[this.updateIndex].description);
  }

}
