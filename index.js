class Animals {

    constructor(thirst, hunger, rest, play) {
        this.thirst = thirst;
        this.hunger = hunger;
        this.rest = rest;
        this.play = play;
    }

    hunger = 0;
    thirst = 0;
    rest = 0;
    play = 0;
};

class Feed extends Animals {
    constructor(thirst, hunger, rest, play) {
        super(thirst, hunger, rest, play)
    }

    feed() {
        this.hunger++;
        this.thirst--;
    }
};

class Water extends Animals {
    constructor(thirst, hunger, rest, play) {
        super(thirst, hunger, rest, play)
    }

    water() {
        this.thirst++;
    }
};

class Play extends Animals {
    constructor(thirst, hunger, rest, play) {
        super(thirst, hunger, rest, play)
    }

    playable() {
        this.play++;
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


let feeder = new Feed(1, 1, 0, 0);
let waterr = new Water(0, 1, 0, 0);
let restt = new Rest(1, 1 ,1 ,1);
let playa = new Play(0, 1, 1, 1);

console.log(feeder)


module.exports = {
    feeder,
    waterr,
    restt,
    playa,
}