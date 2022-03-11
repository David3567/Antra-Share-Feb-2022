import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CustompipeComponent } from './custompipe/custompipe.component';
import { MyPipePipe } from './custompipe/my-pipe.pipe';
import { MypPipe } from './myp.pipe';

@NgModule({
  declarations: [AppComponent, MyPipePipe, CustompipeComponent, MypPipe],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
