function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>("d");

console.log(output);

// Type Inference

let o2 = identity("dh");

console.log(o2);

// Other Way

let myIdentity: <T>(arg: T) => T = identity;

// Another Way

let myIdentity2: { <T>(arg: T): T } = identity;

// Interfaced Way

interface Twi {
  <T>(arg: T): T;
}

let identity2: Twi = identity;

// Passing Generic Type to Interface

interface Tpi<T> {
  (arg: T): T;
}

let myIdentity3: Tpi<number> = identity;

// Classes With Generic
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};

let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "gi ";
stringNumeric.add = function (x, y) {
  return x + y;
};
console.log(myGenericNumber.add(2, 3));
console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));

interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

loggingIdentity([2, 3, 4]);
