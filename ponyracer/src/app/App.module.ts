import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { RacesComponent } from './races/races.component';
import { AppComponent } from './app.component';


@NgModule({

  declarations: [
   // AppComponent,
   // RacesComponent
  ],
  imports: [
    BrowserModule,

    HttpClientModule
  ],
  providers: [],


})

export class AppModule { }