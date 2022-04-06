import { Injectable } from '@angular/core';
import { NOTES } from "../shared/notes";

@Injectable({
  providedIn: 'root'
})
export class NoteService {

constructor() { }

  getNotes() {
    return NOTES;
  }

  addNote() {
    NOTES.push(
      {
        id: 3,
        title: 'Note 3',
        description: 'Description 3'
      }
    )
  }
}