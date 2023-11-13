import { Directive } from '@angular/core';

@Directive({
  selector: '[nsDoNothing]',
  standalone: true
})
export class DoNothingDirective {

  constructor() { 

    console.log('Do nothing directive')
  }

}


