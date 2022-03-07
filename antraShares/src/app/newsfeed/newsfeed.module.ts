import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsfeedComponent } from './newsfeed.component';



@NgModule({
  declarations: [NewsfeedComponent],
  exports:[NewsfeedComponent],
  imports: [
    CommonModule
  ]
})
export class NewsfeedModule { }
