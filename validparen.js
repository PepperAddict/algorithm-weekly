function Each(s, next = null) {
  this.character = s;
  this.next = next;
}

function LinkedList() {
  this.head = null;
  this.length = 0;
}

LinkedList.prototype.insertFirst = function (s) {
  let each = new Each(s);
  let current;

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

LinkedList.prototype.match = function () {
  let currentNode = this.head;

  let track = [];
  let keepgoing = true;

  let openers = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
 
  while (currentNode && keepgoing) {
    
      let character = currentNode
        ? currentNode.hasOwnProperty("character")
        : false;

      if (character) {

        if (openers.hasOwnProperty(currentNode.character)) {

          track.unshift( {open : openers[currentNode.character]})
          currentNode = currentNode && currentNode.next && currentNode.next;
        } else if (!currentNode.hasOwnProperty("character")) {
          keepgoing = false;
        } else {

          if (track.length > 0) {
            let trackval = track[0].open

            if (currentNode.character === trackval) {

              //success now remove the key
              track.shift();

            } else {
                track.push('oh')
            }
          } else {
              track.push('oh')
          }
          currentNode = currentNode && currentNode.next && currentNode.next;
        }
      }
    
  }

  let lengthofTrack = track.length;
  console.log(track);
  return lengthofTrack > 0 ? false : true;
};

// let isValid = function (s) {
//   let link = new LinkedList();
//   for (let x of s) {
//     link.insertFirst(x);
//   }

//   return link.match();
// };

let isValid = function (s) {
  let track = []
  let openers = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let x of s) {


    if (openers.hasOwnProperty(x)) {
      track.unshift({key: openers[x]})
    } else {
      if (track.length > 0) {
        //get first 
        let trackval = track[0].key

        if (x === trackval) {
          track.shift();
        } else {
          track.push('oh')
        }
      } else {
        track.push('oh')
      }
    }

  }

  return track.length > 0 ? false : true;

}

isValid("()"); // should say valid
isValid("[");
//isValid('[[[]')
//isValid(']')
isValid('(])')
//isValid('(){}[]') // valid
//isValid('(]') // invalid
//isValid('([)]') //is invalid
//isValid("([])"); // valid
//isValid("{[]}")
//isValid("{[]}")
// isValid('') // valid
