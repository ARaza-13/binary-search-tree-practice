import Tree from "./tree.js";
import Driver from "./driver.js";
import prettyPrint from "./print.js";

const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]; // sorted and no duplicates [1, 3, 4, 5, 7, 8, 9, 23, 67, 324, 6345]
const tree = new Tree(array);
const driver = new Driver();

console.log(prettyPrint(tree.root));

tree.insert(13);
console.log(tree.find(13));
tree.deleteItem(8);

console.log(prettyPrint(tree.root));

console.log(tree.levelOrder(prettyPrint));
console.log(tree.levelOrderRecursive(prettyPrint));

console.log(tree.inOrder(prettyPrint));
console.log(tree.preOrder(prettyPrint));
console.log(tree.postOrder(prettyPrint));

console.log(tree.isBalanced());

driver.driverScript();
