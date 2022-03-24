import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';


const routes: Routes = [
  { path:'register', component: RegisterComponent},
  { path:'login', component: LoginComponent},
  { path:'newsfeed', 
  loadChildren: () => import('../news-feed/news-feed.module').then((m) => m.NewsFeedModule)
},
  { path:'admin', 
  loadChildren: () => import('../admin/admin.module').then((m) => m.AdminModule)
}
]

const LoginModules = [
  CommonModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  FormsModule,
  ReactiveFormsModule
]

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [LoginModules, RouterModule.forChild(routes)],
  // exports: [LoginModules]
})
export class LoginModule { }
