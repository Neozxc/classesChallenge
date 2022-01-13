class Animals {
    constructor(thirst, hunger, rest, play) {
        this.thirst = thirst;
        this.hunger = hunger;
        this.rest = rest;
        this.play = play;
    }

    hunger = 50;
    thirst = 50;
    rest = 20;
    play = 10;
};

class Feed extends Animals {
    constructor(thirst, hunger, rest, play) {
        super(thirst, hunger, rest, play)
    }

    feed() {
        this.hunger + 5;
    }
};

class Water extends Animals {
    constructor(thirst, hunger, rest, play) {
        super(thirst, hunger, rest, play)
    }

    water() {
        this.thirst + 10;
    }
};

class Play extends Animals {
    constructor(thirst, hunger, rest, play) {
        super(thirst, hunger, rest, play)
    }

    playable() {
        this.play + 20;
    }
};

class Rest extends Animals {
    constructor(thirst, hunger, rest, play) {
        super(thirst, hunger, rest, play)
    }

    restful() {
        this.rest++;
    }
};


let feeder = new Feed(1, 0, 0, 0);
let water = new Water(1, 1, 0, 0);
let rest = new Rest(1, 1 ,1 ,0);
let play = new Play(1, 1, 1, 1);

// console.log(feeder)
// console.log(water)
// console.log(rest)
// console.log(play)


module.exports = {
    feeder,
    water,
    rest,
    play
}