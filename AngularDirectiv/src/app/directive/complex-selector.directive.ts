import { Directive } from '@angular/core';

@Directive({
  selector: 'div.loggable[logText]:not([notLoggable=true])',
  standalone: true
})
export class ComplexSelectorDirective {

  constructor() { 

    console.log('Complex selector directive');
  }

}
