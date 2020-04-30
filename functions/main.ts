// Basic
function add(a, y) {
  return a + y;
}

// Anonymous Function
let myAdd = function (x, y) {
  return x + y;
};

// Adding Types

function addWithTypes(x: number, y: number): number {
  return x + y;
}

let myAddWithTypes = function (x: number, y: number): number {
  return x + y;
};

// Infering the Types
let myAddV2: (baseValue: number, increment: number) => number = function (
  x,
  y
) {
  return x + y;
};

// Optional Args
function buildName(firstName: string, lastName?: string) {
  if (lastName) return firstName + " " + lastName;
  else return firstName;
}

// Default Args
function defArgs(firstName: string, sex = "male") {
  console.log(firstName, sex);
}

// Rest

function buildNameWithRest(firstName: string, ...restOfName: string[]) {
  console.log(firstName, ...restOfName);
}

buildNameWithRest("name", "dd", "udd");

// this
let deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  createCardPicker: function () {
    return function () {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);

      return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
    };
  },
};
