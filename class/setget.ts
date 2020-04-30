const fullNameMaxLength = 10;

class Employee {
  private _fullName: string;

  get fullName(): string {
    return this._fullName;
  }

  set fullName(newName: string) {
    if (newName && newName.length > fullNameMaxLength) {
      throw new Error("fullName has a max length of " + fullNameMaxLength);
    }

    this._fullName = newName;
  }
}

let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
  console.log(employee.fullName);
}

// Static Properties

// Access With The Class Name

class Grid {
  static origin = { x: 0, y: 0 };
  calculateDistanceFromOrigin(point: { x: number; y: number }): number {
    let xDist = point.x - Grid.origin.x;
    let yDist = point.y - Grid.origin.y;

    return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
  }

  constructor(public scale: number) {}
}

let g1 = new Grid(1.0);
let g2 = new Grid(5.0);

console.log(g1.calculateDistanceFromOrigin({ x: 3, y: 4 }));

// Abstract Class

// Abstract Class is  a Base Class Which Cannot be instantiated directly

abstract class Animal {
  abstract makeSound(): void;
  move(): void {
    console.log("roaming the earth...");
  }
}

class Zebra extends Animal {
  makeSound() {
    console.log("BUdoJ");
  }
  move() {
    super.move();
    console.log("OK ");
  }
}

new Zebra().move();

class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return "Hello, " + this.greeting;
  }
}

let greeter: Greeter;
greeter = new Greeter("world");
console.log(greeter.greet()); // "Hello, world"
