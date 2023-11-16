import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonComponent} from '../button/button.component';

@Component({
  selector: 'app-first-demo',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './first-demo.component.html',
  styleUrl: './first-demo.component.css'
})
export class FirstDemoComponent {

    
    names: string[] = ["shamim vai", "abduallah Vai", "Emrul vai"];
}
