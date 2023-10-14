export type Dog = {
  name: string;
  age: number;
};

type PlayerCallback = (state: string) => void;

type Size = "s" | "m" | "l";

interface Pet {
  color: string;
}

interface Bulldog extends Dog, Pet {}

function switchState(callback: PlayerCallback) {}

function createButton(size: Size) {}

createButton("m");
