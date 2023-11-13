import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DoNothingDirective} from '../diractives/do-nothing.directive';
@Component({
  selector: 'ns-testdiractivewithcomponent',
  standalone: true,
  imports: [CommonModule, DoNothingDirective],
  templateUrl: './testdiractivewithcomponent.component.html',
  // template: ``,
  styleUrl: './testdiractivewithcomponent.component.css'
})
export class TestdiractivewithcomponentComponent {
      constructor(){
         console.log('Testd iractive with component');
      }
}
