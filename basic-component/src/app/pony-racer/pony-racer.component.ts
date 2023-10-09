import { Component } from '@angular/core';
import { RaceComponent } from '../race/race.component';

@Component({
  selector: 'app-pony-racer',
  standalone: true,
  templateUrl: './pony-racer.component.html',
  styleUrls: ['./pony-racer.component.css'],
  imports: [RaceComponent,]
})
export class PonyRacerComponent {
  user = { name: 'kamal' };
}
