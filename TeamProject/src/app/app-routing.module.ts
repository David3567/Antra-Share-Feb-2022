import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './modules/login/login-page/login-page.component';
import { RegisterPageComponent } from './modules/login/register-page/register-page.component';
import { ProfilePageComponent } from './modules/profile/profile-page/profile-page.component';
import { SettingPanelComponent } from './modules/setting/setting-panel/setting-panel.component';
import { AdminPageComponent } from './modules/admin/admin-page/admin-page.component';
import { NewsfeedPageComponent } from './modules/news-feed/newsfeed-page/newsfeed-page.component';
import { GuardService} from 'src/app/services/guard.service';

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
    path: 'newsfeed',
    component: NewsfeedPageComponent,
  },
  {
    path: 'profile',
    component: ProfilePageComponent,
  },
  {
    path: 'setting',
    component: SettingPanelComponent,
    
  },
  {
    path: 'admin',
    component:AdminPageComponent,
    canActivate: [GuardService]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
