import { Component,  signal } from '@angular/core';

@Component({
  selector: 'app-counterapp',
  imports: [],
  templateUrl: './counterapp.component.html',
  styleUrl: './counterapp.component.css'
})
export class CounterappComponent  {

    count  = signal<number>(0);

    counter : number = 0;

    addNumber(){
      this.count.update(x => x + 1);
    }

    minusNumber(){
      this.count.update(x => x >0 ? x - 1 : 0);
    }
    resetCount(){
      this.count.set(0);
    }


    handelCountByclick(action : string){
      if(action === 'add'){
        this.counter++;
      }
      else if(action === 'minus'){
        this.counter--;
      }
      else if(action === 'reset'){
        this.counter = 0;
      }
    }


}
