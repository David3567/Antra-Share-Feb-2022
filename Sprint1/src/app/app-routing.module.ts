import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './module/profile/profile.component';
import { SettingComponent } from './module/setting/setting.component';
import { LoginComponent } from './module/home/components/login/login.component';
import { AdminComponent } from './module/admin/components/admin/admin.component';
import { NewsfeedComponent } from './module/newsfeed/components/newsfeed/newsfeed.component';
import { RegisterComponent } from './module/home/components/register/register.component';
import { ProfileGuard } from './core/guards/profile.guard';

const routes: Routes = [
  {
    path: 'login',
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
    canActivate:[ProfileGuard],
    // children:[
    //   {
    //     path: '{username:username}',
    //     component: ProfileComponent,
    //     canActivate: [ProfileGuard],
    //   }
    // ]
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
