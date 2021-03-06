import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {LayoutModule} from './modules/layout/layout.module';
import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './modules/shared/shared.module';
import {StatisticModule} from './modules/statistic/statistic.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    AppRoutingModule,
    SharedModule,
    StatisticModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
