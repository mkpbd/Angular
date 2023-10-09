import { Component } from '@angular/core';
import { DoNothingDirective } from '../do-nothing.directive';
import {SimplTextDirectiveDirective} from '../simpl-text-directive.directive'
@Component({
  selector: 'app-race',
  standalone: true,
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css'],
   imports:[DoNothingDirective, SimplTextDirectiveDirective]
})
export class RaceComponent {
  race: any;

  //constructors(raceService: RaceService) {
  //  raceService.get().then(race => (this.race = race))
  //}
}
