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
    this.size++
}

function setup(...nums) { // 0 (n)
    
    let list = new LinkedList()
    for (let x of nums) {
        list.insertLast(x)
    }


}
let sets = [100, 10, 30]
setup(...sets)