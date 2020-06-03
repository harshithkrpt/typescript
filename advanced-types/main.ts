// function extend<First, Second>(first: First, second: Second): First & Second {
//   const result: Partial<First & Second> = {};
//   for (const prop in first) {
//     if (first.hasOwnProperty(prop)) {
//       (result as First)[prop] = first[prop];
//     }
//   }

//   for (const prop in second) {
//     if (second.hasOwnProperty(prop)) {
//       (result as Second)[prop] = second[prop];
//     }
//   }

//   return result as First & Second;
// }

// class Person {
//   constructor(public nameing: string) {}
// }

// interface Loggable {
//   log(name: string): void;
// }

// class ConsoleLogger implements Loggable {
//   log(name) {
//     console.log(`Hello, I'm ${name}.`);
//   }
// }

// const jim = extend(new Person("JIM"), ConsoleLogger.prototype);

// jim.log(jim.name);

function padLeft(value: string, padding: string | number) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
  throw new Error(`Expected string or number , got '${padding}'.`);
}

padLeft("Hello World", 4);

interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

function getSmallPet(): Fish | Bird {
  if (Math.random() < 0.5) {
    return {
      swim: () => {},
      layEggs: () => {},
    };
  }
  return {
    fly: () => {},
    layEggs: () => {},
  };
}

let pet = getSmallPet();

pet.layEggs();
if ((pet as Bird).fly) {
  (pet as Bird).fly();
}

// Using Type Predicates
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

console.log(isFish(pet));

function move(pet: Fish | Bird): string {
  if ("swim" in pet) {
    return "Hello";
  }
}

// Using in operator

// Using typeof as guards

// Type ALiases

type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;

function getName(n: NameOrResolver): Name {
  if (typeof n === "string") {
    return n;
  } else {
    return n();
  }
}

type Container<T> = { value: T };

// A Tree
type Tree<T> = {
  value: T;
  left: Tree<T>;
  right: Tree<T>;
};

// Linked List With Intersection and type aliases
type LinkedList<T> = T & { next: LinkedList<T> };

interface Person {
  name: string;
}

type Alias = { num: number };
interface Interface {
  num: number;
}

type Easing = "hello" | "name" | "harshit";

let nameing: Easing;

nameing = "hello";

// Discriminated Unions

interface Square {
  kind: "square";
  size: number;
}

interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

interface Circle {
  kind: "circle";
  radius: number;
}

type Shape = Square | Rectangle | Circle;

function assertNever(x: never): never {
  throw new Error("Unexpected object:" + x);
}

function area(s: Shape): number {
  switch (s.kind) {
    case "square":
      return s.size * s.size;
    case "rectangle":
      return s.height * s.width;
    case "circle":
      return Math.PI * s.radius ** 2;
    default:
      return assertNever(s);
  }
}
