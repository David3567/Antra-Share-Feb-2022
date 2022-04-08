import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/interfaces/note.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  noteList: Note[] = [
    {
      title: 'Convivial',
      content:
        'ADJECTIVE\n(of an atmosphere or event) friendly, lively, and enjoyable.',
    },
    {
      title: 'Proclivity',
      content:
        'NOUN\na tendency to choose or do something regularly; an inclination or predisposition toward a particular thing.',
    },
    {
      title: 'Lurid',
      content:
        'ADJECTIVE\nvery vivid in color, especially so as to create an unpleasantly harsh or unnatural effect.',
    },
    {
      title: 'Spire',
      content:
        'NOUN\na tapering conical or pyramidal structure on the top of a building, typically a church tower.',
    },
    {
      title: 'Abject',
      content:
        'ADJECTIVE\n(of something bad) experienced or present to the maximum degree.',
    },
    {
      title: 'Ungainly',
      content: 'ADJECTIVE\n(of a person or movement) awkward; clumsy.',
    },
  ];
  selected?: Note;
  indexBase: number = -1;

  constructor() {}

  ngOnInit(): void {
    const getLocal: any = localStorage.getItem('Notes');
    this.noteList = localStorage.getItem('Notes')
      ? JSON.parse(getLocal)
      : this.noteList;
  }

  onClick(index: number) {
    this.selected = this.noteList[index];
    this.indexBase = index;
  }

  onDelete(index: number) {
    return this.noteList.splice(index, 1);
  }

  onAdd() {
    this.noteList.push({ title: 'New', content: '' });
  }

  onSave(note: any) {
    this.noteList.splice(note.index, 1, {
      title: note.title,
      content: note.content,
    });
    localStorage.setItem('Notes', JSON.stringify(this.noteList));
  }

  onCloud() {
    const choice = confirm('Do you wish to reset the list to DEFAULT values?');
    if (choice === true) {
      localStorage.removeItem('Notes');
      location.reload();
      alert('Reset complete.');
    }
  }
}
