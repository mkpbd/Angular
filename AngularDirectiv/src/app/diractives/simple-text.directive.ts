import { Directive } from '@angular/core';

@Directive({
  selector: '[loggable]',
  inputs: ['logText'],
  standalone: true
})
export class SimpleTextDirective {

  constructor() { }
  set logText(value: string) {
    console.log(value);
  }

}
