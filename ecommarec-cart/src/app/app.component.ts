import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  template: `

    <app-header></app-header>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  titles = signal<string>('ecommarec cart');
}
