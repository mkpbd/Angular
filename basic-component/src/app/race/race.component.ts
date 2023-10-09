import { Component } from '@angular/core';

@Component({
  selector: 'app-race',
  standalone: true,
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})
export class RaceComponent {
  race: any;

  //constructors(raceService: RaceService) {
  //  raceService.get().then(race => (this.race = race))
  //}
}
