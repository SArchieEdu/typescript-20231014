export const enum Size {
  s = "s",
  m = "m",
  l = "l",
  xl = "xl",
  xxl = "xxl",
}

function getButton(size: Sizes) {}

getButton(Size.s);
getButton("m");

console.log(Size.l); // "l"
console.log("s"); // true

const film = {
  __typename: "Film",
};

enum MovieType {
  Film = "Film",
  Episode = "Episode",
}

function playContent(type: MovieType) {}

// playContent(film.__typename);

type Sizes = "s" | "m" | "l";

export const MovieTypes = {
  s: "s",
  m: "m",
  l: "l",
} as const;
export type MovieTypes = keyof typeof MovieTypes;

function getButton2(size: MovieTypes) {
  MovieTypes.m;
}
