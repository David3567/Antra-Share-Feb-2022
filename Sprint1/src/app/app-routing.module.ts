import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingComponent } from './setting/setting.component';
import { RegisterComponent } from './login/register/register.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    component: HomeComponent,
  },
  {
    path: 'login2',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'newsfeed',
    component: NewsfeedComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'setting',
    component: SettingComponent,
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
