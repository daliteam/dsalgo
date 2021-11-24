class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class Tree {
  constructor(node) {
    this.root = node;
  }
}

const stack = [];
let answer = 0;

function makeTree(currentNode, value, index, length, target) {
  stack.push(currentNode.value);
  if (stack.length === length + 1) {
    let sum = stack.reduce((prev, curr) => prev + curr);
    if (sum === target) {
      answer += 1;
    }
  }
  if (index <= length) {
    currentNode.left = new Node(value[index]);
    currentNode.right = new Node(-value[index]);
    makeTree(currentNode.left, value, index + 1, length, target);
    stack.pop();
    makeTree(currentNode.right, value, index + 1, length, target);
    stack.pop();
  }
}

function solution(numbers, target) {
  const tree = new Tree(new Node(0));
  makeTree(tree.root, numbers, 0, numbers.length, target);
  return answer;
}
