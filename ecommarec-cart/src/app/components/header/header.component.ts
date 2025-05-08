import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <header class="header   bg-gray-800 text-white box-shadow-lg">
      <div class="container p-4 mx-auto flex justify-between items-center">
        <h1>My E-commerce Cart</h1>
        <p>Welcome</p>
      </div>
    </header>
  `,
  styles: ``
})
export class HeaderComponent {

}
