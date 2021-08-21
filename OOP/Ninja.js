// Objectives: 
// Practice creating a class and making instances from it 
// Practice accessing the methods and attributes of different instances. 
// The Ninja class should have name, health, speed and strength attributes. When a new Ninja instance is created, you must pass in name and health values.  Set speed and strength to a value of 3.

// The class should also have the following methods:

// sayName() - log to the console the name of this Ninja instance
// showStats() - log to the console all 4 attributes of this Ninja instance
// drinkSake() - Add 10 to this Ninja instance health attribute

// Create a Ninja class  add an attribute: name  add an attribute: health  add a attribute: speed - give a default value of 3  add a attribute: strength - give a default value of 3  add a method: sayName() - This should log that Ninja's name to the console  add a method: showStats() - This should show the Ninja's name, strength, speed, and health.  add a method: drinkSake() - This should add +10 Health to the Ninja

class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
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
    }
}

const ninja1 = new Ninja("Hyabusa", 100);
ninja1.sayName();
ninja1.showStats();