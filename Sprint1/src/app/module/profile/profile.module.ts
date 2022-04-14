import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { JwtService } from 'src/app/core/services/jwt.service';
import { VariableValue } from 'src/app/services/variable.service';



@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [JwtService, VariableValue]
})
export class ProfileModule { }