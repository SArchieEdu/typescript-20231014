type IdLabel = {
  id: number;
};

interface NameLabel {
  name: string;
}

type NameOrId<Label extends string | number> = Label extends string
  ? NameLabel
  : IdLabel;

export function createLabel<Label extends number | string>(
  value: Label
): NameOrId<Label> {
  throw "";
}

let a = createLabel<string>("a");
a.name;
let b = createLabel<number>(123);
b.id;
