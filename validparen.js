


function Openers(s, next = null) {
    this.character = s
    this.next = next 
}

function LinkedList() {
    this.head = null;
    this.length = 0;
}
function LinkedListTwo() {
    this.head = null;
    this.length = 0
}
LinkedList.prototype.insertLast = function (s) {

    this.head = new Openers(s, this.head)
    this.length++
}
LinkedListTwo.prototype.insertLast = function (s) {
    this.head = new Openers(s, this.head)
    this.length++
}
let isValid = function(s) {
    let opens = []
    let closes = []

    let openers = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    let link = new LinkedList()
    let linktwo = new LinkedListTwo()

    for (let x of s) {
        link.insertLast(x)
    }
    // console.log(link)
    // console.log(linktwo)

    //lets compare our linked lists we created for comparison 
    //if digit list doesn't match it sucks anyway 

    console.log(opens)
    console.log(closes)

    if (opens.length !== closes.length) {
        console.log('fail')
    } else {

    }

}


isValid('()') // should say valid 

// isValid('(){}[]') // valid 
// isValid('(]') // invalid 
// isValid('([)]') //is invalid
// isValid('({})') // valid
// isValid('') // valid

//need to understand stack