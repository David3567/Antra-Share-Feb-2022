import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SHARED_ZORRO_MODULES } from './shared-zorro.module';



const MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  ...SHARED_ZORRO_MODULES
]

@NgModule({
  imports:[
    ...MODULES
  ],
  exports:[
    ...MODULES
  ]
})

export class SharedModule { }