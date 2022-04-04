import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShortenPipe } from '../core/shorten.pipe';


@NgModule({
  declarations: [
    ProfileComponent,
    ShortenPipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  exports: [
    ProfileComponent,
  ]
})
export class ProfileModule { }
