export interface BaseResponse {
  code: string;
  status: string;
}

interface Movie {
  title: string;
}

interface Review {
  text: string;
}

export interface MovieListResponse extends BaseResponse {
  result: Movie[];
}

export interface CreateReviewResponse extends BaseResponse {
  data: Review;
}

export interface Response<Result> {
  code: string;
  status: string;
  result: Result;
}

type FilmListResponse = Response<Movie[]>;
/*
{
  code: string;
  status: string;
  result: Movie[];
}
*/
type NewReviewResponse = Response<Review>;
/*
{
  code: string;
  status: string;
  result: Review;
}
*/

let movieList: Response<Movie[]>;

function calculate(a: number, b: number) {
  return a + b;
}

const result = calculate(1, 2);

console.log(result);

type Video<Fragment> = {
  streamUrl: string;
  fragment: Fragment;
};

const a = 2;

class Pet<MedicalInfo = DogInfo, Name = string | number> {
  age: number;
  medicalInfo: MedicalInfo;

  constructor(private name: Name, age: number, medicalInfo: MedicalInfo) {
    this.name = name;
    this.age = age;
    this.medicalInfo = medicalInfo;
  }
}
interface DogInfo {
  height: number;
}
interface CatInfo {
  weight: number;
}

const dog = new Pet<DogInfo>("", 1, { height: 12 });
const cat = new Pet<CatInfo, string>("", 1, { weight: 12 });

function log<Text extends { a: string }>(text: Text): Text {
  return text;
}
const log2 = <Text>(text: Text): Text => {
  return text;
};

const resultText = log<{ a: string; b: number }>({ a: "", b: 123 });
const resultText2 = log2<string>("");

function getProperty<Entity, Key extends keyof Entity>(
  entity: Entity,
  key: Key
): Entity[Key] {
  return entity[key];
}

const result3 = getProperty<{ a: string; b: number }, "a" | "b">(
  { a: "", b: 123 },
  "b"
);
