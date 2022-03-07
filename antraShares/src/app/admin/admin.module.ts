import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { UsersListComponent } from "./usersList/usersList.component";
import { UserinforService } from "../services/userinfor.service";
import { HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [AdminComponent, UsersListComponent],
  imports: [
    CommonModule,HttpClientModule
  ],
  exports: [
    AdminComponent, UsersListComponent
  ],
  providers: [UserinforService]
})
export class AdminModule { }
