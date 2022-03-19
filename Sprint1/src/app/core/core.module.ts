import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteReuseStrategy } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { throwIfAlreadyLoaded } from './module-import-guard';


registerLocaleData(en);


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }]
})
export class CoreModule { 
  constructor(@Optional() @SkipSelf() parentModule: CoreModule){
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}