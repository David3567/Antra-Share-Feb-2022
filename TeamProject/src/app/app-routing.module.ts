import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './modules/login/login-page/login-page.component';
import { RegisterPageComponent } from './modules/login/register-page/register-page.component';
import { ProfilePageComponent } from './modules/profile/profile-page/profile-page.component';
import { SettingPanelComponent } from './modules/setting/setting-panel/setting-panel.component';
import { AdminPageComponent } from './modules/admin/admin-page/admin-page.component';
import { NewsfeedPageComponent } from './modules/news-feed/newsfeed-page/newsfeed-page.component';
import { ProfileGuard } from './guards/profile-guard.service';
import { AdminGuard } from './guards/admin-guard.service';
import { GenericGuard } from './guards/generic-guard.service';


const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'register',
    component: RegisterPageComponent,
  },
  {
    path: 'newsfeed', canActivate: [GenericGuard],
    component: NewsfeedPageComponent,
  },
  {
    path: 'profile', canActivate: [GenericGuard],
    component: ProfilePageComponent,
  },
  {
    path: 'profile/:username', canActivate: [ProfileGuard],
    component: ProfilePageComponent,
  },
  {
    path: 'setting', canActivate: [GenericGuard],
    component: SettingPanelComponent,

  },
  {
    path: 'admin', canActivate: [AdminGuard],
    component: AdminPageComponent,
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
