import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { UserinfoComponent } from './admin/userinfo/userinfo.component';
import { LoginComponent } from './login/login.component';
import { RegisterPageComponent } from './login/register-page/register-page.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { NewsfeedModule } from './newsfeed/newsfeed.module';
import { ProfileComponent } from './profile/profile.component';
import { SettingComponent } from './setting/setting.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin/userinfo/:id', component: UserinfoComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'setting', component: SettingComponent },
  { path: 'home', component: NewsfeedComponent },

  // { path: '', redirectTo:'home',pathMatch:'full' },

  // { path: '**', component: NewsfeedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
