import { Directive } from '@angular/core';

@Directive({
  selector: '[nsComplexSelector]',
  standalone: true
})
export class ComplexSelectorDirective {

  constructor() { }

}
