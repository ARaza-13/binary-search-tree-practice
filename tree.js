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
    return node; // if value is a duplicate, return node and ignore value
  }

  deleteItem(value) {
    this.root = this._deleteNode(this.root, value);
  }

  _deleteNode(node, value) {
    if (node === null) return node;

    // if value to delete is smaller, recurse left
    if (value < node.data) {
      node.left = this._deleteNode(node.left, value);

      // if value to delete is larger, recurse right
    } else if (value > node.data) {
      node.right - this._deleteNode(node.right, value);

      // if value matches the current node
    } else {
      if (node.left === null) return node.right; // if no left child, replace value with right child
      if (node.right === null) return node.left; // if no right child, replace value with left child

      // for 2 children
      node.data = this._minValue(node.right); // replace node value with its in-order successor (smallest node from right subtree)
      node.right = this._deleteNode(node.right, node.data); // delete the in-order successor from the right subtree
    }
    return node;
  }

  _minValue(node) {
    let current = node;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  find(value) {
    return this._find(this.root, value);
  }

  _find(node, value) {
    if (node === null || node.data === value) return node;
    if (value < node.data) return this._find(node.left, value);
    return this._find(node.right, value);
  }

  levelOrder(callback) {
    if (!callback) throw new Error("Callback function is required");

    let queue = [];
    if (this.root) queue.push(this.root);

    while (queue.length > 0) {
      let currentNode = queue.shift(); // get the node at the front of the queue
      callback(currentNode); // execute the callback function on the current node

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
  }

  levelOrderRecursive(callback) {
    if (!callback) throw new Error("Callback function is required");

    const height = this.height(this.root); // Get the height of the tree
    for (let i = 0; i <= height; i++) {
      this._printGivenLevel(this.root, i, callback); // Print each level one by one
    }
  }

  _printGivenLevel(node, level, callback) {
    if (node === null) return;
    if (level === 0) {
      callback(node); // Process the node if we reach the correct level
    } else if (level > 0) {
      this._printGivenLevel(node.left, level - 1, callback); // Process the left subtree
      this._printGivenLevel(node.right, level - 1, callback); // Process the right subtree
    }
  }

  inOrder(callback, node = this.root) {
    if (!callback) throw new Error("Callback function is required");
    if (node === null) return;

    this.inOrder(callback, node.left); // Visit left subtree
    callback(node); // Process current node
    this.inOrder(callback, node.right); // Visit right subtree
  }

  preOrder(callback, node = this.root) {
    if (!callback) throw new Error("Callback function is required");
    if (node === null) return;

    callback(node); // Process current node first
    this.preOrder(callback, node.left); // Visit left subtree
    this.preOrder(callback, node.right); // Visit right subtree
  }

  postOrder(callback, node = this.root) {
    if (!callback) throw new Error("Callback function is required");
    if (node === null) return;

    this.postOrder(callback, node.left); // Visit left subtree
    this.postOrder(callback, node.right); // Visit right subtree
    callback(node); // Process current node last
  }

  isBalanced(node = this.root) {
    if (node === null) return true; // Has no children

    let leftHeight = this.height(node.left);
    let rightHeight = this.height(node.right);

    let heightDifference = Math.abs(leftHeight - rightHeight);

    if (heightDifference > 1) return false; // Current node is unbalanced

    return this.isBalanced(node.left) && this.isBalanced(node.right);
  }

  rebalance() {
    let nodes = [];

    // Transverse the tree in-order to get a sorted array
    this.inOrder((node) => nodes.push(node.data));

    // Build a balanced tree from the sorted array
    this.root = this.buildTree(nodes);
  }

  height(node) {
    if (node === null) return -1; // leaf node has height of 0

    let leftHeight = this.height(node.left);
    let rightHeight = this.height(node.right);

    return Math.max(leftHeight, rightHeight) + 1; // adding 1 accounts for the edge between the current node and its child
  }

  depth(node, currentNode = this.root, depthLevel = 0) {
    if (currentNode === null) return -1; // Base case: If the node isn't found
    if (currentNode === node) return depthLevel; // If we've found the node, return the depth

    if (node.data < currentNode.data) {
      return this.depth(node, currentNode.left, depthLevel + 1); // Tranverse left subtree
    } else {
      return this.depth(node, currentNode.right, depthLevel + 1); // Transverse right subtree
    }
  }
}
