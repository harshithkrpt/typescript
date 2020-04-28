let isDone: boolean = false;

isDone = true;

// Numbers
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// String

let color: string = "blue";
color = "red";

color = `My Name is Harshith
I love learning Stuff.`;

// Array
let list: any[] = [1, 2, "4jsdi"];

let list2: number[] = [1, 3];

// Generic Array Type
let list3: Array<number> = [1, 2, 3];

// Tuple -> Array with fixed number of elements

let tuple: [string, number];

tuple = ["harshith", 10];

// Enum
enum Color {
  Red,
  Green,
  Blue,
}

let c: Color = Color.Green;

// Manually Setting Enum
enum Color2 {
  Red = 2,
  Green = 3,
  Blue = 78,
}

console.log(Color2);

// Any

let notSure: any = 4;

notSure.toFixed();

let prettySure: Object = 4; // error TS2339: Property 'toFixed' does not exist on type 'Object'.
/* prettySure.toFixed(); */

let list5: any[] = [1, true, "free"];

// Void
function warnUser(str: string): void {
  console.log(str);
}

warnUser("hE");

// Null or Undefined
let u: undefined = undefined;
let n: null = null;
// Un Reachable end point
function error(message: string): never {
  throw new Error(message);
}

// Infered Return Type is Never
function fail() {
  return error("Something failed");
}

// Infinite Loop Has Unreachable end point
function infiniteLoop(): never {
  while (true) {
    // ..
  }
}

declare function create(o: object | null): void;
create({ prop: 1 });
create(null);
create(undefined); // Error // Type Assertions
/* create(42); */ let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

// OR

strLength = (someValue as string).length;
