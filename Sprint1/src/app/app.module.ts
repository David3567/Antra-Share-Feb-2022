import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewsfeedModule } from './newsfeed/newsfeed.module';
import { HttpClientModule } from '@angular/common/http';
import { ComponentComponent } from './component/component.component';
import { LikedstorycardComponent } from './component/likedstorycard/likedstorycard.component';
import { StorycardComponent } from './component/storycard/storycard.component';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { NewsfeedService } from './services/newsfeed.service';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { SharedModule } from './shared/shared.module';
import { UserdetailComponent } from './component/userdetail/userdetail.component';
import { UseritemsComponent } from './component/useritems/useritems.component';
import { UserlistService } from './services/userlist.service';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    UserdetailComponent,
    UseritemsComponent, 

  ],
  imports: [
    HttpClientModule, 
    BrowserModule, 
    AppRoutingModule, 
    AdminModule, 
    BrowserAnimationsModule, 
    NewsfeedModule, 
    FormsModule, 
    NzLayoutModule,
    NzMenuModule,
    SharedModule,
  ],
  providers: [UserlistService, NewsfeedService],
  bootstrap: [AppComponent],
})
export class AppModule { }
