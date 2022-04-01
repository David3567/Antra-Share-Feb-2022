import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';
import { NewsfeedPageComponent } from './news-feed/newsfeed-page/newsfeed-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent} from './login/register/register.component';
import { SettingPageComponent } from './setting/setting-page/setting-page.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './core/auth.guard';

const routes: Routes = [
 
 {path: 'news', component: NewsfeedPageComponent },
  {path: 'admin', component: AdminPageComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'setting', component: SettingPageComponent, canActivate: [AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})

export class AppRoutingModule { }
function canActivate(): import("@angular/router").Route {
  throw new Error('Function not implemented.');
}

