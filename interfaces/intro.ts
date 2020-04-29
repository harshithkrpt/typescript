// SIMPLE INTERGACE

function printLabel(obj: { name: string }) {
  console.log(obj.name);
}

// Using Interface Keyword

interface Obj {
  name: string;
}

function interfacedPrintLabel(obj: Obj) {
  console.log(obj.name);
}

// Optinal Properties

interface Opt {
  name: string;
  email?: string;
}

function c(obj: Opt) {
  console.log({ name: obj.name, email: obj.email });
}

// ReadOnlt Interfaces

interface RO {
  readonly x: number;
  readonly y: number;
}

let r1: RO = { x: 10, y: 20 };

/* 
    @Error Cannot Reassign ReadOnly Variables

r1.x = 20;

*/

// @TypeScript InbuildType ReadonlyArray<T>

let readOnlyArray: ReadonlyArray<number> = [1, 10, 3];

console.log(readOnlyArray);

readOnlyArray.length;

// Variable Use const
// Properties use readonly

// If Interface has extra properties

interface Extra {
  a: string;
  b: string;
  [propName: string]: any;
}

// Interface Defining Function

interface SearchFunc {
  (source: string, subString: string): boolean;
}

let str: SearchFunc;

str = function (source, subString: string): boolean {
  return true;
};

// Clock
interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}

class Clock implements ClockInterface {
  currentTime: Date = new Date();
  setTime(d: Date) {
    this.currentTime = d;
  }
  constructor(h: number, m: number) {}
}

const c1 = new Clock(1, 2);
c1.setTime(new Date("4/29/2020"));
console.log(c);
