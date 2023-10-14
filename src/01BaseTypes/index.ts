// Boolean
let isTrue: boolean;
isTrue = true;
isTrue = false;

// Number
let num: number = 12312;
let float: number = 12.45;
let binary: number = 0b101;

// BigInt
Number.MAX_SAFE_INTEGER;
let bigNumber: bigint = 100n;

// String
let str: string = "Hello";
str = `${isTrue}`;
str = num.toString();

// Null
let nullVar: null = null;

// Undefined
let undefinedVar: undefined = undefined;

// Object
let objectVar: { a: string; b: number; c: { f: boolean } } = {
  a: "123",
  b: 123,
  c: {
    f: true,
  },
};

// Array
let arrayVar: string[] = ["123"];

// Tuple
let tuple: [number, string] = [123, ""];

// Function
function push(p1: string[], p2: number, p3?: string, p4: boolean = true): void {
  if (p3) {
    p3.toLocaleUpperCase();
  }
  console.log();
}

push([""], 123);

const log = (callback: (a: string) => string): string => {
  return "123";
};

// Any
let anyVar: any;
anyVar = "1231";
anyVar = {};
anyVar = [];
anyVar = function () {};
anyVar.toUpperCase();

// Unknown
// 1. Не может быть присвоен
// 2. Нельзя обратиться к полям или методам

let unknownVar: unknown = { a: "" };

// Never

function test(): never {
  while (true) {
    console.log("Hello");
  }
}

// Union
function log2(
  data: { a: string; c: string } | { b: number; c: string }
): string | number {
  return data.c;
}

log2({ a: "", c: "" });

let fontWeight: "bold" | 600;

fontWeight = "bold";
fontWeight = 600;
// fontWeight.toUpperCase();

function calculate(fontWeight: "bold" | 600) {}

let size: "s" | "m" | "l" | "xl";

size = "s";

let playingState: "play" | "pause" | "finish";

function switchTOPLayingState(state: "play" | "pause" | "finish") {}

switchTOPLayingState("pause");

// Intersection
let dog: { name: string } & { age: number }; // {name: string, age: number}

dog = { name: "", age: 3 };

let example: string & number;
