import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ValidatorintemplateformComponent } from './validatorintemplateform/validatorintemplateform.component';
import { SetvalidatorComponent } from './setvalidator/setvalidator.component';
import { CustomvalidatorComponent } from './customvalidator/customvalidator.component';
import { CrossfieldvalidationComponent } from './crossfieldvalidation/crossfieldvalidation.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateformComponent,
    ReactiveformComponent,
    ValidatorintemplateformComponent,
    SetvalidatorComponent,
    CustomvalidatorComponent,
    CrossfieldvalidationComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
