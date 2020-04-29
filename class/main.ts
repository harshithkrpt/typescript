class Greater {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return "Hello," + this.greeting;
  }
}

// Inheritance
class Animal {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(distanceInMeters: number = 0) {
    console.log(`Animal Moved ${distanceInMeters}m.`);
  }
}

class Dog extends Animal {
  shape?: string;
  constructor(theName: string, theShape?: string) {
    super(theName);
    if (theShape) this.shape = theShape;
  }
  bark() {
    console.log("Woof! Woof!");
  }
}

class Snake extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 5) {
    console.log("Slithering...");
    super.move(distanceInMeters);
  }
}

class Horse extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 45) {
    console.log("Galopping...");
    super.move(distanceInMeters);
  }
}

let sam = new Snake("~!!The Python!!~");
let tom: Animal = new Horse("This is a Horse");

const dog = new Dog("Melon");

dog.bark();
dog.move(10);

// Private Access Modifiers
class Animal2 {
  #name: string;
  constructor(theName: string) {
    this.#name = theName;
  }
  getName(): string {
    return this.#name;
  }
}

console.log(new Animal2("Cot").getName()); // Property '#name' is not accessible outside class 'Animal' because it has a private identifier.

class Animal3 {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  getName(): string {
    return this.name;
  }
}

console.log(new Animal3("Cot").getName()); // Property '#name' is not accessible outside class 'Animal' because it has a private identifier.

class Rhino extends Animal {
  constructor() {
    super("Rhino");
  }
}

class Employee {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}

let animal = new Animal("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");

animal = rhino;
/*
 Error: 'Animal' and 'Employee' are not compatible
animal = employee;
 */

class Person {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Employee2 extends Person {
  private department: string;

  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }

  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}

let howard = new Employee2("Howard", "Sales");
console.log(howard.getElevatorPitch());

/* 
console.log(howard.name); // error
 */
