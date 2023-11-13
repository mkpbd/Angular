import { Directive } from '@angular/core';

@Directive({
  selector: '[loggable]',
  inputs: ['text: logText'],
  standalone: true
})
export class SimpleTextDirective {

  constructor() { }

}
