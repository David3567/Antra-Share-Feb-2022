import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Note } from 'src/interface/note.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnChanges{
  title = 'Notes';
  notesList:Note[] = [];
  currentNote!:Note;
  hide!: boolean;
  enableSave!: boolean;
  enableRevert!: boolean;
  count:number = 0;
  addflag: boolean = false;

  noteForm = new FormGroup({
    title: new FormControl('',Validators.required),
    content: new FormControl('',Validators.required)
  })

  constructor() {}
  
  ngOnInit(): void {
    this.hide = true;
    console.log(this.hide)
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  add(){
    this.hide = false;
    this.noteForm.reset();
    this.addflag = true;
    this.check();
  };

  onSubmit() {
    if(this.addflag) {
      let newNote: Note = {
      title: this.noteForm.value.title,
      content: this.noteForm.value.content
    }
    this.notesList.push(newNote);
    this.noteForm.reset();
    this.addflag = false;
    }
    else {
      const index = this.notesList.indexOf(this.currentNote)
      this.notesList[index] = {
        title: this.noteForm.value.title,
        content: this.noteForm.value.content
      }
      
    }
    this.check();
    
  }

  check() {
    const formv = this.noteForm.value;
    const curv = this.currentNote;

    if(curv === undefined && this.noteForm.valid){
      this.enableSave = true;
    }
    else if(curv !== undefined && this.noteForm.valid){
      if(curv.title !== formv.title || curv.content !== formv.content) {
        this.enableSave = true;
        this.enableRevert = true;
      }
      else {
        this.enableSave = false;
        this.enableRevert = false;
      }
    }else {
        this.enableSave = false;
        this.enableRevert = false;
      }
  }

  select(note: Note) {
    this.currentNote = note;
    this.noteForm.setValue(this.currentNote);
    this.check();
  }

  delete(note: Note) {
    this.notesList = this.notesList.filter((val) => {
      return val === note ? false : true;
    })
    this.hide = true;
    this.noteForm.reset();
  }

  Revert() {
    alert("Note reverted")
    this.noteForm.setValue(this.currentNote)
    this.check();
  }
}
