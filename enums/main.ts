enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

enum BooleanLikeHeterogeneousEnum {
  No = 0,
  Yes = "YES",
}

enum DirectionString {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

function getSomeValue(): number {
  return 2;
}

/* 

enum E {
  A = getSomeValue(),
  B, // Error! Enum member must have initializer.,
}
 */

enum FileAccess {
  // constant members
  None,
  Read = 1 << 1,
  Write = 1 << 2,
  ReadWrite = Read | Write,
  // computed member
  G = "123".length,
}

enum E {
  Foo,
  Bar,
}

/* function f(x: E) {
  if (x !== E.Foo || x !== E.Bar) {
                     ~~~~~~~~~~~
    Error! This condition will always return 'true' since the types 'E.Foo' and 'E.Bar' have no overlap.
  }
} */
