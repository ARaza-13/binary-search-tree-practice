import Tree from "./tree.js";
import prettyPrint from "./print.js";

const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]; // sorted and no duplicates [1, 3, 4, 5, 7, 8, 9, 23, 67, 324, 6345]
const tree = new Tree(array);

console.log(prettyPrint(tree.root));
