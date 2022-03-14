import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UseritemsComponent } from 'src/app/components/useritems/useritems.component';
import { UserdetailComponent } from 'src/app/components/userdetail/userdetail.component';


@NgModule({
  declarations: [
    AdminComponent,
    UseritemsComponent,
    UserdetailComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
