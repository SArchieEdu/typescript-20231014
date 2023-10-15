// 1 typeof

export function calculate(a: number, b: number | string): number {
  if (typeof b === "number") {
    return a + b;
  }

  return a + Number(b);
}

interface Person {
  name: string;
  accountNumber?: string;
}

// 2 Проверка на истинность
function log(a: string, b?: string) {
  if (!b) {
    b = "";
  }

  console.log(a + b.toUpperCase());
}

function printPersonInfo(person: Person) {
  console.log(`${person.name} - ${person.accountNumber?.toUpperCase()}`);
}

// 3 Проверка на равенство
function sum(a: number | string, b: number | boolean) {
  if (a === b) {
    return a + b;
  }

  //   return a + b;
}

// 4 in

interface Dog {
  run(): void;
  bark(): void;
}

interface Wolf {
  run(): void;
  bark(): void;
  bite(): void;
}

interface Cat {
  jump(): void;
  meow(): void;
}

function makeNoise(pet: Dog | Cat | Wolf): void {
  if ("bark" in pet) {
    pet.bark();
    pet.run();

    if ("bite" in pet) {
      pet.bite();
    }
  } else {
    pet.meow();
  }
}

// 5 instanceof

class Pet {
  bark() {}
}

function logPet(pet: Pet | string) {
  if (pet instanceof Pet) {
    pet.bark();
  } else {
    console.log(pet);
  }
}

// 6 type predicate

interface Movie {
  title: string;
  duration: number;
}

function isMovie(data: unknown): data is Movie {
  const movie = data as Movie;

  if (!movie) {
    return false;
  }

  if (typeof movie.title !== "string" || typeof movie.duration !== "number") {
    return false;
  }

  return true;
}

// function isFilm(movie: Film | Episode): movie is Film {

// }

function getMovieList(): Movie {
  const result: unknown = fetch("");

  if (!isMovie(result)) {
    throw new Error("Invalid Movie List");
  }

  return result;
}

// 7 Исключающие объединение

interface Film {
  __typename: "Film";
  duration: number;
}

interface TvSeries {
  __typename: "TvSeries";
  episodeCount: number;
  episodeDuration: number;
}

interface TvShow {
  __typename: "TvShow";
  seasonCount: number;
  episodeInSeasonCount: number;
  episodeDuration: number;
}

function calculateDuration(movie: Film | TvSeries | TvShow): number {
  if (movie.__typename === "Film") {
    return movie.duration;
  }
  if (movie.__typename === "TvSeries") {
    return movie.episodeCount * movie.episodeDuration;
  }

  return movie.seasonCount * movie.episodeInSeasonCount * movie.episodeDuration;
}
