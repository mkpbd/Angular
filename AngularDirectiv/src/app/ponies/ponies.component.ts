import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DoNothingDirective} from '../directive/do-nothing.directive';

@Component({
  selector: 'ds-ponies',
  standalone: true,
  imports: [CommonModule, DoNothingDirective],
  templateUrl: './ponies.component.html',
  styleUrl: './ponies.component.css'
})
export class PoniesComponent {

}
