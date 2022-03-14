import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { RegisterComponent } from './login/register/register.component';
import { NewsfeedPageComponent } from './newsfeed/newsfeed-page/newsfeed-page.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterComponent },
  // { path: 'profile', component: ProfileComponent }
  { path: 'newsfeed', component: NewsfeedPageComponent },
  // { path: 'setting', component: SettingComponent }
  { path: 'admin', component: AdminPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
