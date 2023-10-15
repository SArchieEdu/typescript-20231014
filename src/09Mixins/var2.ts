export class Animal {
  feed() {}
}

class Horse extends Animal {}
class Car {}

type Constructor = new (...args: any[]) => {};

function Movable<Parent extends Constructor>(Base: Parent) {
  return class Child extends Base {
    move() {}
  };
}

const MovableHorse = Movable(Horse);
const MovableCar = Movable(Car);

const horse = new MovableHorse();
horse.feed();
horse.move();
