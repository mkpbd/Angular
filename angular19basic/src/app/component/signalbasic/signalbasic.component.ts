import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signalbasic',
  imports: [],
  templateUrl: './signalbasic.component.html',
  styleUrl: './signalbasic.component.css'
})
export class SignalbasicComponent {

  counters = signal<number>(0);
   count: WritableSignal<number> = signal(0);
   doubleCount: Signal<number> = computed(() => this.count() * 2);

// Signals are getter functions - calling them reads their value.



  handleSetSingnal(){
      this.counters.set(10);
  }

  handleUpdateSignal(){
    this.counters.update((oldValue) => oldValue + 1);
  }


  handleComputeSignal(){
    this.count.update((oldValue) => oldValue + 1);

  }

}
