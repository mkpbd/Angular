import { Component, Input } from '@angular/core';
import { CommonModule , NgFor} from '@angular/common';
import { PonyModel } from '../model/ponyModel';

@Component({
  selector: 'ds-pony',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './pony.component.html',
  styleUrl: './pony.component.css'
})
export class PonyComponent {
  // @Input({ required: true }) pony!: PonyModel;

  ponies: Array<PonyModel> = [
    { id: 1, name: 'Rainbow Dash' , age: 36},
    { id: 2, name: 'Pinkie Pie', age:44 }
    ];
}
