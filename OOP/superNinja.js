// Objectives: 
// Practice extending a class and making instances from it
// Practice accessing the inherited methods and attributes of the instances.
// Sensei Class
// Extend the Ninja class and create the Sensei class. A Sensei should have 200 Health, 10 speed, and 10 strength by default.

// In addition, a Sensei should have a new attribute called wisdom, and the default should be 10.

// Finally, add the speakWisdom() method. speakWisdom() should call the drinkSake() method from the Ninja class, before console.logging a wise message.
// create a class Sensei that inherits from the Ninja class  add an attribute: wisdom - default to 10  create a method: speakWisdom()

class Ninja {
    constructor(name, health, speed=3, strength=3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName() {
        console.log(`Name is : ${this.name}`);
    }
    showStats() {
        console.log(`Name: ${this.name},
                Strength: ${this.strength},
                Speed: ${this.speed},
                Health: ${this.health}`)
    }
    drinkSake() {
        this.health += 10;
        console.log(`Current strenght is ${this.health} after drinking sake.`);
    }
}

class Sensei extends Ninja {
    constructor(name, wisdom=10) {
        super(name, 200,10, 10);
        this.wisdom = wisdom;
    }
    speakWisdom() {
        super.drinkSake();
        console.log("Two heads are better than one.")
    }
    
}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
