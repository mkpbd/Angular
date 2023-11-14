import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PoniesComponent } from './ponies/ponies.component';
import {ComplexSelectorDirective} from './directive/complex-selector.directive';
import { SimpleTextDirective } from './diractives/simple-text.directive';
import { InputDecoratorDirective } from './diractives/input-decorator.directive';
@Component({
  selector: 'ds-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PoniesComponent, ComplexSelectorDirective,SimpleTextDirective,InputDecoratorDirective],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularDirectiv';
}
