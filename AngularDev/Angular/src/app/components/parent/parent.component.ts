import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
   
  number: number =10;
 dataPass: number = 0;
  constructor(){}

  updateChildCompnent(envent: any){

    this.number = Math.floor(Math.random() *100);

  }
}
