import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login.component';
import { LoginFormComponent } from './login-form.component';

const routes: Routes = [
  {path: '',component:LoginFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginFormRoutingModule { }
