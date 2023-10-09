import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DoNothingDirective } from './do-nothing.directive';
import { RaceComponent } from './race/race.component';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
     RaceComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
