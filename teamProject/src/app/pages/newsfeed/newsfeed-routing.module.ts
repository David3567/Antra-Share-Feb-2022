import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsfeedComponent } from './newsfeed.component';

const routes: Routes = [
  {
    path: '', component: NewsfeedComponent

  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class NewsfeedRoutingModule { }
