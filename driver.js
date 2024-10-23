import Tree from "./tree.js";

export default class Driver {
  generateRandomArray(size, maxValue = 100) {
    return Array.from({ length: size }, () =>
      Math.floor(Math.random() * maxValue),
    );
  }

  driverScript() {
    // create a binary search tree from an array of random numbers less than 100
    let randomNumbers = this.generateRandomArray(10);
    let tree = new Tree(randomNumbers);
    console.log("Initial random array: ", randomNumbers);
  }
}
