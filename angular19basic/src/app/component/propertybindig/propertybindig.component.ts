import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-propertybindig',
  imports: [FormsModule],
  templateUrl: './propertybindig.component.html',
  styleUrl: './propertybindig.component.css'
})
export class PropertybindigComponent {
  color: string = 'background-color: red; font-size: 20px; color: white; padding: 10px;';

  // properties binding by single property
  signalProper =  signal<string>("signalProper")

  inputtext:string ='';
}
