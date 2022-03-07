import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { AdminModule } from './pages/admin/admin.module';
import { SharedModule } from './shared/shared.module';
import { UserlistService } from './services/userlist.service';
import { TimeoutwindowComponent } from './components/timeoutwindow/timeoutwindow.component';
import { AvartanameandblankComponent } from './components/avartanameandblank/avartanameandblank.component';
import { NewsfeedingareaComponent } from './components/newsfeedingarea/newsfeedingarea.component';
import { LikedstorylistComponent } from './components/likedstorylist/likedstorylist.component';
import { StorycontentComponent } from './components/storycontent/storycontent.component';


@NgModule({
  declarations: [
    AppComponent,
    TimeoutwindowComponent,
    AvartanameandblankComponent,
    NewsfeedingareaComponent,
    LikedstorylistComponent,
    StorycontentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzMenuModule,
    AdminModule,
    SharedModule
  ],
  providers: [UserlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
