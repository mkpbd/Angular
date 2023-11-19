import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-simpleform',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './simpleform.component.html',
  styleUrl: './simpleform.component.css'
})
export class SimpleformComponent {
      firstName  = new FormControl('');
      lastName = new FormControl('');
      age = new FormControl('');

      getFormValues(event: any) {
          event.preventDefault();
          console.log(this.firstName.value);
          console.log(this.lastName.value);
          console.log(this.age.value);
      }

}
