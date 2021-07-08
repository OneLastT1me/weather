import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherAppComponent } from './Components/weather-app/weather-app.component';
import { NewDayComponent } from './Components/new-day/new-day.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherAppComponent,
    NewDayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
