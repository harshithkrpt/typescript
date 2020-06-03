interface Named {
  name: string;
}

let x: Named;

let y = { name: "Alick", location: "dd" };

x = y;

function great(n: Named) {
  console.log(n);
}

great(y);

let p = (a: number) => 0;
let q = (a: number, b: number) => 0;

// p = q;
q = p;
// p = q;

// Return Types
let r = () => ({ name: "Alice" });
let s = () => ({ name: "Alice", location: "Seas" });

r = s;
// s = r;
console.log(r());
console.log(s());
