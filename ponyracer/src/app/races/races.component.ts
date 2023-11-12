import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
 import { RaceComponent } from '../race/race.component';
@Component({
  selector: 'ns-races',
  standalone: true,
  imports: [CommonModule, RaceComponent],
  templateUrl: './races.component.html',
  styleUrl: './races.component.css'
})

export class RacesComponent {
  races: Array<RaceModel> = [];
  refreshRaces(): void {
  this.races = [{ name: 'London' }, { name: 'Lyon' }];
  }

  onButtonClick(event: MouseEvent): void {
        console.log(event);
  }
}

type  RaceModel = { }