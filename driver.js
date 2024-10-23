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
  }
}
