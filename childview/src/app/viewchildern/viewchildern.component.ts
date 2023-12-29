import { Component , OnInit, ViewChildren,ElementRef,QueryList} from '@angular/core';

@Component({
  selector: 'app-viewchildern',
  // standalone: true,
  // imports: [],
  templateUrl: './viewchildern.component.html',
  styleUrl: './viewchildern.component.css'
})
export class ViewchildernComponent implements OnInit {
   multiple! : ElementRef;
  ngOnInit(): void {
       
   }

   @ViewChildren('elementRef') multipleElementRef!: QueryList<ElementRef>

onShow(): void {

    this.multipleElementRef.forEach((elementRef: ElementRef) =>{
        console.log(elementRef.nativeElement);;
    })


  }
}
