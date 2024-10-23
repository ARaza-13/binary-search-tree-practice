import Tree from "./tree.js";

export default class Driver {
  generateRandomArray(size, maxValue = 100) {
    return Array.from({ length: size }, () =>
      Math.floor(Math.random() * maxValue),
    );
  }

  driverScript() {
    let randomNumbers = this.generateRandomArray(10);
    let tree = new Tree(randomNumbers);

    console.log("Initial random array: ", randomNumbers);

    console.log("Is the tree balanced?", tree.isBalanced());

    console.log("Level order traversal:");
    tree.levelOrder((node) => console.log(node.data));

    console.log("Pre-order traversal:");
    tree.preOrder((node) => console.log(node.data));

    console.log("In-order traversal:");
    tree.inOrder((node) => console.log(node.data));

    console.log("Post-order traversal:");
    tree.postOrder((node) => console.log(node.data));

    tree.insert(150);
    tree.insert(200);
    tree.insert(300);

    console.log(
      "Is the tree balanced after inserting large numbers?",
      tree.isBalanced(),
    );

    tree.rebalance();

    console.log("Is the tree balanced after rebalancing?", tree.isBalanced());
  }
}
