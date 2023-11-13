import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PoniesComponent } from './ponies/ponies.component';

@Component({
  selector: 'ds-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PoniesComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularDirectiv';
}
