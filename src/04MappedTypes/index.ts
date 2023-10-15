interface Movie {
  title: string;
  duration: number;
  releaseYear: number;
}

type MovieKey = keyof Movie; // 'title' | 'duration'
const key: MovieKey = "title";

const result = [1, 2, 3, 4].map((element) => `${element}`);

type MovieCopy = {
  [Property in keyof Movie]: Movie[Property];
};

type PartialMovie = {
  [Property in keyof Movie]?: Movie[Property];
};

type ReadonlyMovie = {
  readonly [Property in keyof Movie]: Movie[Property];
};
type NotPartialMovie = {
  [Property in keyof Movie]-?: Movie[Property];
};

type NotReadonlyMovie = {
  -readonly [Property in keyof Movie]: Movie[Property];
};

type PartialPartialMovie = {
  [Property in Exclude<keyof Movie, "duration">]: Movie[Property];
} & {
  [Property in "duration"]?: Movie[Property];
};

type PartialPartial<Entity, Keys extends keyof Entity> = {
  [Property in Exclude<keyof Entity, Keys>]: Entity[Property];
} & {
  [Property in Keys]?: Entity[Property];
};

type PartialMovie2 = PartialPartial<Movie, "duration" | "title">;

const movie: PartialMovie2 = { releaseYear: 123 };

type MovieGetters = {
  [Property in keyof Movie as `get${Capitalize<Property>}`]: () => Movie[Property];
};
type MovieSetters = {
  [Property in keyof Movie as `set${Capitalize<Property>}`]: (
    value: Movie[Property]
  ) => void;
};

type CompleteMovie = Movie & MovieGetters & MovieSetters;

// class Film implements CompleteMovie {}
