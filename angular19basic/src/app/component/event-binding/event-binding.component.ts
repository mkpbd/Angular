import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  imports: [],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css'
})
export class EventBindingComponent {



  handleClick(event: Event){
      console.log(event.target);
  }

  handleInput(event: HTMLInputElement): void {
    console.log(event.value );
  }

  handleOnchange(event: any): void {
    console.log(event.target.value);
  }
}
