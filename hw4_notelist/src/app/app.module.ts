import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NotelistComponent } from './components/notelist/notelist.component';
import { NotedetailComponent } from './components/notedetail/notedetail.component';
import { NoteService } from './services/note.service';

@NgModule({
  declarations: [
    AppComponent,
    NotelistComponent,
    NotedetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
