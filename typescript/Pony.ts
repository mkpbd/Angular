
function logger(): Console {
    return console;
}

class Pony implements CanRun {
    run(meters: number): void {
        console.log(`pony runs ${meters}m`);
    }
}

interface CanEat {
    eat(): void
}

interface Animal extends CanRun, CanEat { }


class HungryPony implements CanRun, CanEat {
    run(meters: number): void {
        console.log(`pony runs ${meters}m`);
    }
    eat(): void {
        console.log(`pony eats`);
    }
}


class SpeedyPony {
    speed = 10;
    run(): void {
        console.log(`pony runs at ${this.speed}m/s`);
    }
}

class NamedPony {
    constructor(public name: string, private speed: number) { }
    run(): void {
        console.log(`pony runs at ${this.speed}m/s`);
    }
}
const pony2 = new NamedPony('Rainbow Dash', 10);
// defines a public property name with 'Rainbow Dash'
// and a private one speed with 10



class NamedPonyWithoutShortcut {
    public name: string;
    private speed: number;
    constructor(name: string, speed: number) {
        this.name = name;
        this.speed = speed;
    }
    run(): void {
        console.log(`pony runs at ${this.speed}m/s`);
    }
}