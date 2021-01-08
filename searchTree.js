// first we create a node object constructor that will have nothing in it so far
function Node(val) {
  //this object is the node. To create a node, it has no more than two children. 
  //we have the value of what it should be, but not quite sure of where to go yet. 
  // so we will have to create a function for it which is where addNode comes into play. 
  this.value = val;
  this.left = null;
  this.right = null;
  this.height = 0;
}

//we create an object constructor for tree as well.
function Tree() {
  this.root = null;
}

function TreeBalanced() {
  this.root = null
}

// in the very start, we need to check if root is empty, if it is, insert node. 
// now if the root isn't, we insert a node function/method that checks where it should go
Tree.prototype.addValue = function (val) {
  let node = new Node(val);

  if (this.root === null) {
    this.root = node;
  } else {
    this.root.addNode(node);
  }
};

let left = 0
let right = 0;
Node.prototype.addNode = function (n) {
  
  //first we check to see if n is less than Node's value then add to its left

  function createp(child) {

  }

  if (n.value < this.value) {
    let parent = document.createElement('p')
    parent.className = 'left';
    parent.innerHTML = n.value
    bt.appendChild(parent)
    if (this.left == null) {
      this.left = n
    } else {
      this.left.addNode(n)
      this.height = this.height + 1;
    }
    // if it's greater than node's value we go right.
  } else if (n.value > this.value) {
    //we will do the same for right

    let parent = document.createElement('p')
    parent.className = 'right';
    parent.innerHTML = n.value
    bt.appendChild(parent)
    if (this.right == null) {
      this.right = n;
      let node = document.createElement('p')
      node.className = 'node right';
      node.innerHTML = n.value
      parent.appendChild(node)

    } else {
      this.height = this.height + 1;
       this.right.addNode(n);
       let node = document.createElement('p')
       node.className = 'node right';
       node.innerHTML = n.value
       parent.appendChild(node)
    }
  }
};


let bt = document.getElementById('bt')
function setup() {
  tree = new Tree();

  for (var i = 0; i < 10; i++) {
    tree.addValue(Math.round(Math.random() * 1050) + 1);
  }
  tree.initiateBalance()
  tree.traverse(0)



}

// We have fully setup the sorted tree 
// now for printing out the value of the tree and in this case, we will use recursion until null

Tree.prototype.traverse = function (root) {
  this.root.visit(root)
}

//this will be the recursion function that keeps searching for something. 

Node.prototype.visit = function(root) {
  
  if (this.left !== null) {
    this.left.visit()
  } 

  if (this.right !== null) {
    this.right.visit()
  } 

}

// Now we will search the tree for a value. 

Tree.prototype.search = function (val) {
  let huh = this.root.findInNode(val)
  console.log(huh)
}

// This is the recursion function that will search through left or right depending on the value and 
//search for that area for the value. If not, yell I cant find it otherwise say found val. 
Node.prototype.findInNode = function (val) {
  
  if (val === this.value) {
    return 'found ' + val;
  } else {
    if (val < this.value && this.left !== null) {
      return this.left.findInNode(val)
    } else if (val > this.value && this.right !== null) {
      return this.right.findInNode(val)
    } else {
      return 'cant find'
    }
  }

}

// Balance a search binary tree! 
// There's an issue now where if we are given 1, 2 3, etc, it'll always be on the right side. 
// So let's get started on trying to balance the binary search tree before we do any searches

Tree.prototype.initiateBalance = function() {
  this.root.balance()
}

Node.prototype.balance = function() {
  
}


setup();
