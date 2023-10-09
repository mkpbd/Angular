import { Directive } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appDoNothing]'
})
export class DoNothingDirective {

  constructor() {

    console.log('Do nothing directive');
  }

}
