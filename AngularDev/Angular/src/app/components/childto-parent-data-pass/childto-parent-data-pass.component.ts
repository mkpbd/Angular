import { Component, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childto-parent-data-pass',
  templateUrl: './childto-parent-data-pass.component.html',
  styleUrl: './childto-parent-data-pass.component.css'
})
export class ChildtoParentDataPassComponent implements OnInit {
    
  @Output() itemDataEvent = new EventEmitter<number>();

  ngOnInit(): void {
      
  }
}
