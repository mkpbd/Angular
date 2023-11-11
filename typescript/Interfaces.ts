function addPointsToScore(player, points) {
    player.score += points;
}


function addPointsToScore1(player: { score: number }, points: number): void {
    player.score += points;
}

interface HasScore {
    score: number;
}

interface PonyModel {
    name: string;
    speed: number;
}
const pony: PonyModel = { name: 'Light Shoe', speed: 56 };

// Optional arguments ? 

function addPointsToScore12(player: HasScore, points?: number): void {
    points = points || 0;
    player.score += points;
}


function addPointsToScore123(player: HasScore, points?: number): void {
    points = points || 0;
    player.score += points;
}

//============== Functions as property ==============


interface CanRun {
    run(meters: number): void;
}
function startRunning(pony: CanRun): void {
    pony.run(10);
}
const ponyOne = {
    run: (meters: number) => console.log(`pony runs ${meters}m`)
};
startRunning(ponyOne);