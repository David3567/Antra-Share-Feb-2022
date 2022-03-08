import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChildComponent } from './lifecycle/child/child.component';
import { GrandChildComponent } from './lifecycle/grandchild/grandchild.component';
import { MainComponent } from './lifecycle/main/main.component';
import { OnchangesComponent } from './onchanges/onchanges.component';
import { OnchangesChildComponent } from './onchanges-child/onchanges-child.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    GrandChildComponent,
    ChildComponent,
    OnchangesComponent,
    OnchangesChildComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
