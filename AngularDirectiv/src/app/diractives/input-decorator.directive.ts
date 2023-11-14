import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[dsInputDecorator]',
  standalone: true,
})
export class InputDecoratorDirective {
  constructor() {}
  @Input('logText')
  set text(value: string) {
    console.log(value);
  }
}
