import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-text-transformer',
  standalone: true,
  imports: [CommonModule],
 // templateUrl: './text-transformer.component.html',
 template: `
 <p>{{ announcement }}</p>
 <button (click)="transformText()">Abracadabra!</button>
`,
  styleUrl: './text-transformer.component.css'
})
export class TextTransformerComponent {
  announcement = 'Hello again Angular!';
  transformText() {
    this.announcement = this.announcement.toUpperCase();
  }
}
