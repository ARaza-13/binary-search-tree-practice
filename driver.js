import Tree from "./tree.js";

export default class Driver {
  generateRandomArray(size, maxValue = 100) {
    return Array.from({ length: size }, () =>
      Math.floor(Math.random() * maxValue),
    );
  }
}
