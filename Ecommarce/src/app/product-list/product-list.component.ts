import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  name : string = 'kamal';
  number : number = 0;
  product ={
    name: 'iphone',
    color:'gold',
    price: 400000,
    image: '../../assets/images/img.avif'
  }
  
  onInputChange(event: any) {
    console.log(event);
  }

  incrementNumber() {
      this.number ++; 
  }
  decrmentNumber(){
    this.number --;
  }

}


