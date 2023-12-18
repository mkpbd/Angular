import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})
export class SignalsComponent {
    // define signal 

     value  = signal(0);

     addNumber(){
       if(this.value() < 10){
        this.value.update(x =>  x + 1);
       }
     }

     decreseNumber(){
      if(this.value() > 0){
        this.value.update(x => x -1);
      }
     }
     }


     