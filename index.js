class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.next = null;
  }

  add(node) {
    if (!this.next) {
      this.left = node;
    } else {
      this.next.add(node);
    }
  }

  getList() {
    if (!this.next) return this.value;
    return ` ${this.value} ${this.next.getList()}`;
  }
}

const B = new BinaryTreeNode('B');
const A = new BinaryTreeNode('A');
const C = new BinaryTreeNode('C');
const D = new BinaryTreeNode('D');

B.add(A);
B.add(D);
B.add(C);
