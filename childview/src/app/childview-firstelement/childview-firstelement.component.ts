import { Component , OnInit , ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-childview-firstelement',
  templateUrl: './childview-firstelement.component.html',
  styleUrl: './childview-firstelement.component.css'
})
export class ChildviewFirstelementComponent implements OnInit { 
  
    ngOnInit(): void {
        
    }

    @ViewChild('elementRef')  firstelement!: ElementRef;

    onShow(): void {

      console.log(this.firstelement.nativeElement);
    }



}
