import { Component,  signal } from '@angular/core';

@Component({
  selector: 'app-counterapp',
  imports: [],
  templateUrl: './counterapp.component.html',
  styleUrl: './counterapp.component.css'
})
export class CounterappComponent  {

    count  = signal<number>(0);

    addNumber(){
      this.count.update(x => x + 1);
    }

    minusNumber(){
      this.count.update(x => x >0 ? x - 1 : 0);
    }
    resetCount(){
      this.count.set(0);
    }
}
