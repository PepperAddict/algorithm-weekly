//Create a node

function Node(data, next = null) {
    this.data = data;
    this.next = next;
}


// to connect these nodes and its necessary functions 

function LinkedList() {
    this.head = null;
    this.length = 0;
    this.size = function() {
        return length
    }
    
}


LinkedList.prototype.insertFirst = function (data) {
    this.head = new Node(data, this.head) 
    console.log(this)
}

LinkedList.prototype.insertLast = function (data) {
    let node = new Node(data)

    
    if (!this.head) {
        this.head = node;

    } else {

        while (this.head.next) {
            this.head = this.head.next
        }

        this.head.next = node; 

    }
    this.length++
}

LinkedList.prototype.removeNode = function(data) {
    let currentNode = this.head;
    let previousNode;
    
    if (currentNode.data === data) {
        this.head = currentNode.next // set it to its next value
    } else {
        while (currentNode.data !== data) {
            previousNode = currentNode; 
            currentNode = currrentNode.next 
        }

        previousNode.next = currentNode.next
    }
    this.length --;
}

LinkedList.prototype.getIndex = function(value) {
   let index = -1;
   console.log(index)
   while (this.head) {
       index++;
       if (this.head.data === value) {
           return index;
       } 
   }

   return -1;

}

function setup(...nums) { // 0 (n)
    
    let list = new LinkedList()
    for (let x of nums) {
        list.insertLast(x)
    }
    list.getIndex(10)

}


let sets = [100, 10, 30]
setup(...sets)
