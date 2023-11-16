import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {FirstDemoComponent} from './app/first-demo/first-demo.component';

bootstrapApplication(FirstDemoComponent, appConfig)
  .catch((err) => console.error(err));
