import Tree from "./tree.js";

export default class Driver {
  generateRandomArray(size, maxValue = 100) {
    return Array.from({ length: size }, () =>
      Math.floor(Math.random() * maxValue),
    );
  }

  driverScript() {
    // create a binary search tree from an array of random numbers < 100
    let randomNumbers = this.generateRandomArray(10);
    let tree = new Tree(randomNumbers);
    console.log("Initial random array: ", randomNumbers);

    // confirm that the tree is balanced
    console.log("Is the tree balanced?", tree.isBalanced());

    // print out all node data elements in level, pre, post, and in-order
    console.log("Level order traversal:");
    tree.levelOrder((node) => console.log(node.data));

    console.log("Pre-order traversal:");
    tree.preOrder((node) => console.log(node.data));

    console.log("Post-order traversal:");
    tree.postOrder((node) => console.log(node.data));

    console.log("In-order traversal:");
    tree.inOrder((node) => console.log(node.data));

    // unbalance the tree by adding several numbers > 100
    tree.insert(150);
    tree.insert(200);
    tree.insert(300);

    // confirm that the tree is unbalanced
    console.log(
      "Is the tree balanced after inserting large numbers?",
      tree.isBalanced(),
    );

    // balance the tree by calling rebalance
    tree.rebalance();

    // confirm that the tree is balanced
    console.log("Is the tree balanced after rebalancing?", tree.isBalanced());

    // print out all node data elements in level, pre, post, and in-order again
    console.log("Level order traversal:");
    tree.levelOrder((node) => console.log(node.data));

    console.log("Pre-order traversal:");
    tree.preOrder((node) => console.log(node.data));

    console.log("Post-order traversal:");
    tree.postOrder((node) => console.log(node.data));

    console.log("In-order traversal:");
    tree.inOrder((node) => console.log(node.data));
  }
}
