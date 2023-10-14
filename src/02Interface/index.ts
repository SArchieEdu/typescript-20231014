interface Pet {
  weight: number;
  readonly color: string;
}

interface Animal {
  height: number;
}

interface Dog extends Pet, Animal {
  weight: 12;
  bark: () => void;
  person?: Person;
}

interface Cat extends Pet, Animal {
  meow: () => void;
}

interface Person {
  name: string;
}

const person: Person = {
  name: "Artem",
};

export const frenchBulldog: Dog = {
  weight: 12,
  color: "fawn",
  person,
  height: 12,
  bark() {},
};

const corgi: Dog = {
  weight: 12,
  height: 12,
  color: "fawn",
  person,
  bark() {},
};

// =====

interface Film {
  __typename: "Film";
}

interface Episode {
  __typename: "Episode";
}

interface Video {
  __typename: "Video";
}

// const movies: (Film | Episode | Video)[];

class Test {
  a: string = "";

  calculate(a: string): number {
    return 123;
  }
}

class TestChild extends Test {
  a: string = "";

  b: number = 123;

  calculate(a: "123"): 123 {
    return 123;
  }
}
