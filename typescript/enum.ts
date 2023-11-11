
class Race {

    status: number;
    constructor() {

    }

}
enum RaceStatus {
    Ready,
    Started,
    Done
}
const race = new Race();
race.status = RaceStatus.Ready;


enum Medal {
    Gold = 1,
    Silver,
    Bronze
}


enum Position {
    First = 'First',
    Second = 'Second',
    Other = 'Other'
}

let color: 'blue' | 'red' | 'green';
// we can only give one of these values to `color`
color = 'blue';

type Color1 = 'blue' | 'red' | 'green';
const ponyColor: Color1 = 'blue';


function startRace(race: Race): Race {
    race.status = RaceStatus.Started;
    return race;
}