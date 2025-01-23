import { Component } from '@angular/core';
import { InterpolationComponent } from '../interpolation/interpolation.component';
import { PropertybindigComponent } from '../propertybindig/propertybindig.component';
import { EventBindingComponent } from '../event-binding/event-binding.component';
import { CounterappComponent } from '../counterapp/counterapp.component';
import { SignalbasicComponent } from "../signalbasic/signalbasic.component";

@Component({
  selector: 'app-header',
  imports: [CounterappComponent, InterpolationComponent, PropertybindigComponent, EventBindingComponent, SignalbasicComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
