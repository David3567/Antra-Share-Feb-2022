import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';
import { LikesPageComponent } from './news-feed/likes-page/likes-page.component';
import { NewsPageComponent } from './news-feed/news-page/news-page.component';

const routes: Routes = [
  {path: 'news', component: NewsPageComponent},
  {path: 'liked', component: LikesPageComponent},
  {path: 'admin', component: AdminPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
