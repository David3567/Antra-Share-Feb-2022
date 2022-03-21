import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLayoutContentComponent } from './default-layout-content.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    DefaultLayoutContentComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ],
  exports:[DefaultLayoutContentComponent]
})
export class DefaultLayoutContentModule { }
