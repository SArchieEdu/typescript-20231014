export abstract class Node {
  x = 0;
  y = 0;
  abstract paint(): void;
  getSize() {}
}

class StorageNode extends Node {
  paint(): void {}
}

function paintGraph(rootNode: Node) {
  rootNode.paint();
}

paintGraph(new StorageNode());
