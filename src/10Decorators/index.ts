import "reflect-metadata";

export class Test {
  @LogTime(1)
  calculate() {
    return 10 * 12312312313 * 12312312312 * 12313231 * 1231312 * 231213;
  }

  calculate2() {
    return 10 * 12312312313 * 12312312312 * 12313231 * 1231312 * 231213;
  }
}

const test = new Test();
test.calculate();

function LogTime(a: number) {
  return (
    target: object,
    propertyName: string,
    descriptor: PropertyDescriptor
  ) => {
    const method = descriptor.value;
    descriptor.value = function (...args: unknown[]) {
      console.log(a);
      console.time(propertyName);
      const result = method.apply(this, args);
      console.timeEnd(propertyName);
      return result;
    };
  };
}

type Constructor = new (...args: any[]) => {};

@Service({
  provide: "inRoot",
})
class MovieService {}

type ServiceMetadata = {
  provide: "inRoot" | "inModule";
};

function Service(metadata: ServiceMetadata) {
  return function (constr: Constructor) {
    Reflect.defineMetadata("serviceMetadata", metadata, constr);
  };
}

const instanceStorage = new Map<Constructor, {}>();

function isServiceMetadata(metadata: unknown): metadata is ServiceMetadata {
  const serviceMeta = metadata as ServiceMetadata;

  return serviceMeta.provide === "inRoot" || serviceMeta.provide === "inModule";
}

function getInstance<CurrentConstr extends Constructor>(
  Constrct: CurrentConstr
) {
  const metadata: unknown = Reflect.getMetadata("serviceMetadata", Constrct);

  if (isServiceMetadata(metadata) && metadata.provide === "inRoot") {
    if (!instanceStorage.has(Constrct)) {
      instanceStorage.set(Constrct, new Constrct());
    }

    return instanceStorage.get(Constrct);
  } else {
    return new Constrct();
  }
}

const instance = getInstance(MovieService);

class Dog {
  @Condition({
    from: 10,
    to: 14,
  })
  height: number;

  constructor(height: number) {
    this.height = height;
  }
}

function Condition(metadata: { from: number; to: number }) {
  return function (object: Object, propertyName: string) {
    Reflect.defineMetadata(
      `condition_${propertyName}`,
      metadata,
      object.constructor
    );
  };
}

function validate<Entity extends Object>(entity: Entity) {
  return Object.getOwnPropertyNames(entity).every((propertyName) => {
    const meta: unknown = Reflect.getMetadata(
      `condition_${propertyName}`,
      entity.constructor
    );

    return true;
  });
}

validate(new Dog(12));
validate(new Dog(34));
