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
  indexNum: number = -1;

  constructor() {}

  ngOnInit(): void {}

  onClick(index: number) {
    this.selected = this.noteList[index];
    this.indexNum = index;
  }

  onDelete(index: number) {
    return this.noteList.splice(index, 1);
  }

  onAdd() {
    this.noteList.push({ title: 'title', content: '' });
  }

  onSave(note: any) {
    this.noteList.splice(note.index, 1, {
      title: note.title,
      content: note.content,
    });

    console.log(this.noteList);
  }
}
