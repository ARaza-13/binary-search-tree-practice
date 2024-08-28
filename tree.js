import Node from "./node.js";

export default class Tree {
  constructor(array) {
    array = [...new Set(array)]; // Remove duplicates
    array.sort((a, b) => a - b);
    this.root = this.buildTree(array);
  }

  buildTree(array) {
    if (array.length === 0) return null;
    const mid = Math.floor(array.length / 2);
    const node = new Node(array[mid]);
    node.left = this.buildTree(array.slice(0, mid));
    node.right = this.buildTree(array.slice(mid + 1));
    return node;
  }

  insert(value) {
    this.root = this._insert(this.root, value);
  }

  _insert(node, value) {
    if (node === null) return new Node(value);
    if (value < node.data) {
      node.left = this._insert(node.left, value);
    } else if (value > node.data) {
      node.right = this._insert(node.right, value);
    }
    return node;
  }
}
