import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ConvertAddressComponent } from './convert-address/convert-address.component';
import { DisplayForecastComponent } from './display-forecast/display-forecast.component';

@NgModule({
  declarations: [
    AppComponent,
    ConvertAddressComponent,
    DisplayForecastComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
