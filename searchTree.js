// first we create a node object constructor that will have nothing in it so far
function Node(val) {
  //we will definitely have the start, but nothing in left or right yet
  this.value = val;
  this.left = null;
  this.right = null;
}

//we create an object constructor for tree as well.
function Tree() {
  this.root = null;
  this.traverse = function (n) {
    this.root.visit();
  };
}

Tree.prototype.addValue = function (val) {
  let node = new Node(val);
  if (this.root === null) {
    this.root = node;
  } else {
    this.root.addNode(val);
  }
};

Node.prototype.addNode = function (n) {
  //first we check to see if n is less than Node's value then add to its left
  if (n.value < this.value) {
    if (this.left === null) {
      this.left = n;
    } else {
      this.left.addNode(n);
      //above will start a recursion until it finds a null:
    }
    // if it's greater than node's value we go right.
  } else if (n.value > this.value) {
    //we will do the same for right
    if (this.right === null) {
      this.right = n;
    } else {
      this.right.addNode(n);
    }
  }
};

function setup() {
  tree = new Tree();

  for (var i = 0; i < 100; i++) {
    tree.addValue(Math.floor(Math.random() * Math.floor(100)));
  }
  console.log(tree);
}

setup();
