class Animals {
    // If we dont feed and give water gets angry and hungry/thirsty
    // If we feed increase love and decrease anger

    constructor(thirst, hunger) {
        this.thirst = thirst;
        this.hunger = hunger;
    }

    thirst = 0;
    hunger = 0;
};

class Feed extends Animals {
    constructor(hunger) {
        super(hunger)
    }

    hunger = 0;
    thirst = 0;

    feed() {
        console.log("Horse got his food!");
        this.hunger++;
        this.thirst--;
    }
};

class Cat extends Animals {
    constructor(hunger, thirst) {
        super(hunger, thirst)
    }

    hunger = 9;
    thirst = 10;

    feed() {
        console.log("Fed cat!");
        this.hunger++;
        this.thirst--;
    }
};

class Bored extends Cat {
    constructor(hunger, thirst, bored) {
        super(hunger, thirst, bored)
    }

    bored = 1;

    play() {
        this.bored++;
    }
};

class Shark extends Animals {
    constructor(hunger, thirst) {
        super(hunger, thirst)
    }

    hunger = 2;
    thirst = 8;

    feed() {
        console.log("Fed shark!");
        this.hunger++;
        this.thirst--;
    }
};

class Bored2 extends Shark {
    constructor(hunger, thirst, bored) {
        super(hunger, thirst, bored)
    }

    bored = 1;

    play() {
        this.bored++;
    }
};



let boredPrint = new Bored(0,0,0);
let sharkPrint = new Shark(7, 5);
let catPrint = new Cat(10, 9);

// For cat
console.log(catPrint);
console.log("Thank you for feeding me!");
console.log(boredPrint);
console.log("Im tired you dont play!");

// For shark
console.log(sharkPrint);
console.log("Thank you for feeding me!");
console.log(boredPrint);
console.log("Im tired you dont play!");

