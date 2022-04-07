import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/interfaces/note.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  noteList: Note[] = [
    { title: 'title A', content: '' },
    { title: 'title B', content: '' },
  ];
  selected?: Note;

  constructor() {}

  ngOnInit(): void {}

  onClick(index: number) {
    // console.log(this.noteList[index]);
    this.selected = this.noteList[index];
  }

  onDelete(index: number) {
    return this.noteList.splice(index, 1);
  }

  onAdd() {
    this.noteList.push({ title: 'title', content: '' });
  }

  onSave(obj: Note) {
    console.log(obj);
  }
}
