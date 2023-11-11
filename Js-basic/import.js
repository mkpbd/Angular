import { bet, start } from './Modules';
import * as racesService from './Modules';

// later
bet(race, pony1);
start(race);

// later
racesService.bet(race, pony1);
racesService.start(race);