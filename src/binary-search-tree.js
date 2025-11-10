const { NotImplementedError } = require("../lib/errors");
// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  root() {
    return this._root || null;
  }

  add(data) {
    const insert = (node, value) => {
      if (!node) return new Node(value);
      if (value < node.data) node.left = insert(node.left, value);
      else if (value > node.data) node.right = insert(node.right, value);
      return node;
    };
    this._root = insert(this._root || null, data);
  }

  find(/* data */) {
    // Remove line below and write your code here
    throw new NotImplementedError("Not implemented");
  }

  has(/* data */) {
    // Remove line below and write your code here
    throw new NotImplementedError("Not implemented");
  }

  remove(/* data */) {
    // Remove line below and write your code here
    throw new NotImplementedError("Not implemented");
  }

  min() {
    if (!this._root) return null;
    let current = this._root;
    while (current.left) {
      current = current.left;
    }
    return current.data;
  }

  max() {
    // Remove line below and write your code here
    throw new NotImplementedError("Not implemented");
  }
}

module.exports = {
  BinarySearchTree,
};
