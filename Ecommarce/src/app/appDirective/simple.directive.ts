import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appSimple]',
  standalone: true
})
export class SimpleDirective  implements OnInit{

  constructor( private el:ElementRef) { }
  ngOnInit(): void {
    //  console.log(this.el);
  }
}
