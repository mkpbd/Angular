import { Component } from '@angular/core';
import { InterpolationComponent } from '../interpolation/interpolation.component';
import { PropertybindigComponent } from '../propertybindig/propertybindig.component';

@Component({
  selector: 'app-header',
  imports: [InterpolationComponent, PropertybindigComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
