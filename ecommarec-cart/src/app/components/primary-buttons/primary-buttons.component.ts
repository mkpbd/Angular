import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-primary-buttons',
  imports: [],
  template: `
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md cursor-pointer" (click)="hendleCardClick()">
      {{ label() }}
    </button>


  `,
  styles: ``
})
export class PrimaryButtonsComponent {

  label = input('');
  hendleClickButton = output();

  hendleCardClick() {
    this.hendleClickButton.emit();


  }

}
