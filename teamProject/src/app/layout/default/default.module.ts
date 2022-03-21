import { NgModule } from '@angular/core';
import { DefaultRoutingModule } from './default-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DefaultLayoutContentModule } from './default-layout-content/default-layout-content.module';
import { DefaultComponent } from './default.component';
import { NavBarComponent } from 'src/app/components/nav-bar/nav-bar.component';
import { NewsfeedModule } from 'src/app/pages/newsfeed/newsfeed.module';


@NgModule({
  declarations: [
    DefaultComponent,
    NavBarComponent
  ],
  imports: [
    DefaultRoutingModule,
    SharedModule,
    DefaultLayoutContentModule,
    NewsfeedModule
  ]
})
export class DefaultModule { }
