let input = [1, 2];

let [first, second] = input;

console.log({ first, second });

// Swapping

[first, second] = [second, first];

console.log({ first, second });

let [newFirst, ...rest] = [1, 2, 3, 4];
console.log(newFirst); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ]

let { a: newName1, b: newName2 } = { a: 1, b: 2 };

console.log(newName1, newName2);

function keepWholeObject(wholeObject: { a: string; b?: number }) {
  let { a, b = 1001 } = wholeObject;
}

type C = { a: string; b?: number };

function f({ a, b }: C): void {
  console.log({ a, b });
}

f({ a: "Hekki" });
