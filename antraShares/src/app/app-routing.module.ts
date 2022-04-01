import { NgModule } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { UserinfoComponent } from './admin/userinfo/userinfo.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterPageComponent } from './login/register-page/register-page.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { NewsfeedModule } from './newsfeed/newsfeed.module';
import { ProfileComponent } from './profile/profile.component';

import { SettingComponent } from './setting/setting.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterPageComponent },

  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'setting',
    component: SettingComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'home',
    component: NewsfeedComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: { userRole: 'admin' },
    children: [{ path: 'userinfo/:id', component: UserinfoComponent }],
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: '**', redirectTo:'home', pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
