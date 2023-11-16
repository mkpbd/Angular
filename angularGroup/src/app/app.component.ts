import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import{FirstDemoComponent} from './first-demo/first-demo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FirstDemoComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angularGroup';
  age = 55;
  group = "angular teams";


  add(){

    return 3+3;
  }

   array :number[] = [2,3,4,5,65,67,78,5];
}
