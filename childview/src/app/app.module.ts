import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildviewFirstelementComponent } from './childview-firstelement/childview-firstelement.component';
import { ViewchildernComponent } from './viewchildern/viewchildern.component';
@NgModule({
  declarations: [
    AppComponent,
    ChildviewFirstelementComponent,
    ViewchildernComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
