//this code is from platform. some console log is added by Helen to learn more about what the code is doing. 
class Card {
    constructor(name, cost) {
      this.name = name;
      this.cost = cost;
    }
  }
  
  class Unit extends Card {
    constructor(name, cost, power, res) {
      super(name, cost);
      this.power = power;
      this.res = res;
    }
  
    attack(target) {
    console.log(`Before attack, attacker power is ${this.power} and res is ${this.res}`);
     console.log(`Before attack, target power is ${target.power} and res is ${target.res}`);
      target.res -= this.power;
      console.log(
        `${this.name} attacks the ${target.name} for ${this.power} damage!`
      );
      console.log(`After attack, attacker power is ${this.power} and attacker res is ${this.res}`);  
      console.log(`After attack, target power is ${target.power} and target res is ${target.res}`);
    }
  }
  
  class Effect extends Card {
    constructor(name, cost, stat, magnitude, text) {
      super(name, cost);
      this.stat = stat;
      this.magnitude = magnitude;
      this.text = text;
    }
  
    play(target) {
      if (target instanceof Unit) {
        console.log("The value of target instanceof Unit is :")
        console.log(target instanceof Unit);
        console.log("Type of target is :")
        console.log(typeof target);
        target[this.stat] += this.magnitude;//this line is very important
        console.log(`The ${this.name} was played on ${target.name}`);
        console.log(this.text);
      } else {
        throw new Error("Target must be a unit!");
      }
    }
  }
  
  // turn 1
  const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
  const hardAlgo = new Effect(
    "Hard Algorithm",
    2,
    "res",
    3,
    "increase target's resilience by 3"
  );
  hardAlgo.play(redBeltNinja);
  
  // turn 2
  const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);
  const unhandledPromise = new Effect(
    "Unhandled Promise Rejection",
    1,
    "res",
    -2,
    "reduce target's resilience by 2"
  );
  unhandledPromise.play(redBeltNinja);
  
  // turn 3
  const pairProgramming = new Effect(
    "Pair Programming",
    3,
    "power",
    2,
    "increase target's power by 3"
  );
  pairProgramming.play(redBeltNinja);
  redBeltNinja.attack(blackBeltNinja);


//   It's Time to Duel


// Unit Cards
// name	cost	power	resilience
// Red Belt Ninja	3	3	4
// Black Belt Ninja	4	5	4


// Effect Cards
// name	cost	text	stat	magnitude
// Hard Algorithm	2	"increase target's resilience by 3"	resilience	+3
// Unhandled Promise Rejection	1	"reduce target's resilience by 2"	resilience	-2
// Pair Programming	3	"increase target's power by 2"	power	+2


// Play out the following scenario
// turn	action
// 1	Make an instance of "Red Belt Ninja"
// 1	Make an instance of "Hard Algorithm" and play it on "Red Belt Ninja"
// 2	Make an instance "Black Belt Ninja"
// 2	Make an instance of "Unhandled Promise Rejection" and play iton "Red Belt Ninja"
// 3	Make an instance of "Pair Programming" and play it on "Red Belt Ninja"
// 3	"Red Belt Ninja" uses the attack method on "Black Belt Ninja"