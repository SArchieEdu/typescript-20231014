export let example = "string";

function getResult(a: string): string {
  if (a == "Hello") {
    return `${1 + 2 + 4}`;
  }

  return a;
}

function getProperty<Entity, Key extends keyof Entity>(
  entity: Entity,
  key: Key
): Entity[Key] {
  return entity[key];
}

const result = getProperty({ a: "", b: 123 }, "b");

function call<ReturnType, ArgType extends any[]>(
  callback: (...args: ArgType) => ReturnType,
  ...args: ArgType
): ReturnType {
  return callback(...args);
}

function calculate(a: number, b: number): number {
  return a + b;
}

const result2 = call(getProperty, { a: "", b: 123 }, "b");

// infer

type ReturnType<Function extends (...args: any) => any> = Function extends (
  ...args: any
) => infer ReturnType
  ? ReturnType
  : never;

type ParamsType<Function extends (...args: any) => any> = Function extends (
  ...args: infer ParamsType
) => any
  ? ParamsType
  : never;
type ResultType<Response extends { code: number; result: any }> =
  Response extends { code: number; result: infer Result } ? Result : never;
//(a: number, b: number) => number

type FunctionReturnType = ReturnType<typeof calculate>;
type FunctionParamsType = ParamsType<typeof calculate>;

const response = {
  code: 200,
  result: {
    movie: { title: "It" },
    tickets: [""],
  },
};

type Result = ResultType<typeof response>;
