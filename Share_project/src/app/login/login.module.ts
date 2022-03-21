import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { RegisterComponent } from './register/register.component';



const LoginModules = [
  CommonModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatCheckboxModule
]

@NgModule({
  declarations: [
  
    RegisterComponent
  ],
  imports: [LoginModules],
  exports: [LoginModules]
})
export class LoginModule { }
