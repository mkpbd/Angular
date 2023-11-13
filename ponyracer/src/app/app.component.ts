import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RacesComponent } from './races/races.component';
import {TestdiractivewithcomponentComponent} from './testdiractivewithcomponent/testdiractivewithcomponent.component';
@Component({
  selector: 'ns-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RacesComponent , TestdiractivewithcomponentComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ponyracer';
}
