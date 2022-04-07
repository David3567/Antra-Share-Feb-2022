import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/interfaces/note.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  noteList: Note[] = [{ title: 'title A', content: '' }, { title: 'title B', content: '' }];

  constructor() { }

  ngOnInit(): void {
  }

  onClick(index: number) {
    console.log(this.noteList[index]);
  }

  onDelete(index: number) {
    return this.noteList.splice(index, 1);
  }
}
