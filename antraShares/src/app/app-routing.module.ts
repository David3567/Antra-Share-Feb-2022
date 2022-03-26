import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { UserinfoComponent } from './admin/userinfo/userinfo.component';
import { LoginComponent } from './login/login.component';
import { RegisterPageComponent } from './login/register-page/register-page.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { NewsfeedModule } from './newsfeed/newsfeed.module';
import { ProfileComponent } from './profile/profile.component';
import { AdminGuardGuard } from './services/admin-guard.guard';
import { SettingComponent } from './setting/setting.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterPageComponent },

  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AdminGuardGuard],
  },
  {
    path: 'setting',
    component: SettingComponent,
    canActivate: [AdminGuardGuard],
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuardGuard],
  },
  {
    path: 'admin/userinfo/:id',
    component: UserinfoComponent,
    canActivate: [AdminGuardGuard],
  },

  {
    path: 'home',
    component: NewsfeedComponent,
    canActivate: [AdminGuardGuard],
  },

  // { path: '', redirectTo:'home',pathMatch:'full' },

  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
