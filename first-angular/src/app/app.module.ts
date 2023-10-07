import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestAppComponent } from 'src/components/test/test.component';
import { TemplateComponent } from 'src/components/tem-com/tem.com.component';
import {StandaloneComponent} from 'src/components/tem-com/standalone.component'


@NgModule({
  declarations: [
    AppComponent,
    TestAppComponent, 
    // TemplateComponent
    
  ],
  // standalone component  import modules
  imports: [
    BrowserModule, 
    TemplateComponent,
    StandaloneComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
