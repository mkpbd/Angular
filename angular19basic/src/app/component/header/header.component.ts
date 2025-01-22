import { Component } from '@angular/core';
import { InterpolationComponent } from '../interpolation/interpolation.component';
import { PropertybindigComponent } from '../propertybindig/propertybindig.component';
import { EventBindingComponent } from '../event-binding/event-binding.component';
import { CounterappComponent } from '../counterapp/counterapp.component';

@Component({
  selector: 'app-header',
  imports: [CounterappComponent,InterpolationComponent, PropertybindigComponent, EventBindingComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
