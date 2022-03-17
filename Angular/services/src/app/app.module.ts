import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FackProductService } from './injector/fackproduct.service';
import { InjectorComponent } from './injector/injector.component';
import { ProductService } from './injector/product.service';
import { LoggerService } from './services/logger.service';
import { RandomService } from './somedecorators/random-service';
import { ChildComponent } from './somedecorators/child.component';
import { GrandChildComponent } from './somedecorators/grand-child.component';
import { SomedecoratorsComponent } from './somedecorators/somedecorators.component';
import { testDirective } from './somedecorators/test.directive';
import { SharedModule } from './shared/shared.module';

const USE_FAKE = new InjectionToken<string>('');

@NgModule({
  declarations: [
    AppComponent,
    GrandChildComponent,
    ChildComponent,
    SomedecoratorsComponent,
    testDirective,
    InjectorComponent,
  ],
  imports: [BrowserModule, SharedModule],
  providers: [
    RandomService,
    LoggerService,
    { provide: USE_FAKE, useValue: true },
    {
      provide: ProductService,
      useFactory: (USE_FAKE: boolean, LoggerService: LoggerService) => {
        return USE_FAKE
          ? new FackProductService()
          : new ProductService(LoggerService);
      },
      deps: [USE_FAKE, LoggerService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

// function mathod() {}
// const obj = { method }
// obj.method()
