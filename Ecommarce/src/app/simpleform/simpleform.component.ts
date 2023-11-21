import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule,NgModel, FormsModule} from '@angular/forms';

@Component({
  selector: 'app-simpleform',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,FormsModule],
  providers: [NgModel, FormsModule],
  templateUrl: './simpleform.component.html',
  styleUrl: './simpleform.component.css'
})
export class SimpleformComponent {
      firstName  = new FormControl('');
      lastName = new FormControl('');
      age = new FormControl('');
      testModel: string = 'kamal passa'; // Initialize it with an appropriate default value
      
      getFormValues(event: any) {
          event.preventDefault();
          console.log(event);
          console.log(this.firstName.value);
          console.log(this.lastName.value);
          console.log(this.age.value);
      }

}
