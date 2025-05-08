import { Component, signal } from '@angular/core';
import { PrimaryButtonsComponent } from '../primary-buttons/primary-buttons.component';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonsComponent],
  template: `
    <header class="header   bg-slate-100  shadow-md">
      <div class="container p-4 mx-auto flex justify-between items-center">
        <h1>My Store</h1>
        <app-primary-buttons [label]="cart()" (hendleClickButton)="handleClickButton($event)"/>
      </div>
    </header>
  `,
  styles: ``
})
export class HeaderComponent {
  // create a single cart signal
  // this signal will be used to update the cart count in the header
 cart = signal<string>('Cart');

 testData = "hello from header"

// create a signal to update the cart count

cartCount = signal<number>(0);
 handleClickButton(event: any) {
  console.log(`hello from header ${this.cartCount.set(this.cartCount() + 1)}  `);
 }
}
