import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutContentComponent } from 'src/app/layout/default/default-layout-content/default-layout-content.component';
import { LoginComponent } from '../login.component';
import { LoginFormComponent } from './login-form.component';

const routes: Routes = [
  {path: '',component:LoginFormComponent},
  {path: 'default',component:DefaultLayoutContentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginFormRoutingModule { }
