import { Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective implements OnInit{

 @Input() color: string='red'; 

  constructor(private el:ElementRef) { }


  ngOnInit(): void {
      this.el.nativeElement.style.backgroundColor = this.color;
  }

}
