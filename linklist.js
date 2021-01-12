//Create a node

function Node(data, next = null) {
    this.data = data;
    this.next = next;
}


// to connect these nodes and its necessary functions 

function LinkedList() {
    this.head = null;
    this.size = 0;
}


LinkedList.prototype.insertNode = function (data) {
    this.head = new Node(data, this.head) 
    console.log(this)
}

function setup(...nums) { // 0 (n)
    
    let list = new LinkedList()
    for (let x of nums) {
        list.insertNode(x)
    }

}
let sets = [100, 200]
setup(...sets)