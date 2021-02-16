


function Each(s, next = null, inde = null) {
  (this.parenth = s), (this.next = next), (this.index = inde);
}

function LinkedList() {
  this.head = null;
  this.length = 0;
}

LinkedList.prototype.insertLast = function (s, i) {
  let each = new Each(s, null, i);
  let current;

  let onlySpecials = ["(", ")", "[", "]", "{", "}"];

  s.find((el, index) => {
    for (let x of onlySpecials) {
      if (x === el) {
        console.log(x)
      }
    }
  });

  if (!this.head) {
    this.head = each;
  } else {
    current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = each;
  }

  this.length++;
};

LinkedList.prototype.removeMatched = function (s) {
  let openers = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  let track = [];
  let currentNode = this.head;
  let keepgoing = true;


  while (keepgoing && currentNode) {
    let character = currentNode ? currentNode.parenth : false;

    if (character) {
      if (openers.hasOwnProperty(character)) {
        track.unshift({ key: openers[character], index: currentNode.index });
        currentNode = currentNode.next;
      } else {
        if (track.length > 0) {

          if (character === track[0].key) {
            track.shift();
          } else {
              s[currentNode.index] = ""
          }
        } else {
          s[currentNode.index] = ""
        }
        currentNode = currentNode.next;
      }
    }
  }

  return s;
};

var minRemoveToMakeValid = function (s) {

  s = s.split("") ;
  if (s.length > 0) {
    let linked = new LinkedList();


    //we're going to ignore the letters for now
    linked.insertLast(s)
    let unmatched = linked.removeMatched(s);

    console.log(unmatched)
  }

};

console.log(minRemoveToMakeValid("(a(b(c)d)")) //a(b(c)d)
//console.log(minRemoveToMakeValid("))((")) //""
//console.log(minRemoveToMakeValid("a)b(c)d")); //"ab(c)d"
//console.log(minRemoveToMakeValid("lee(t(c)o)de)")) //"lee(t(c)o)de"
//console.log(minRemoveToMakeValid("))((")); // ""
//console.log(minRemoveToMakeValid("())()(((")) // ()()

//console.log(minRemoveToMakeValid("lee(t(c)o)de)")) //"lee(t(c)o)de"

