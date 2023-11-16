import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
 import {FirstDemoComponent} from './app/first-demo/first-demo.component';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(FirstDemoComponent, config);

export default bootstrap;
