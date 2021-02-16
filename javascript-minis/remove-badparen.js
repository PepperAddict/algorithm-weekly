var minRemoveToMakeValid = function (s) {
  s = s.split("");
  if (s.length > 0) {
    let track = [];
    let onlySpecials = ["(", ")", "[", "]", "{", "}"];
    let openers = {
      "(": ")",
      "[": "]",
      "{": "}",
    };

    s.find((el, index) => {
      for (let x of onlySpecials) {
        if (x === el) {
          if (openers.hasOwnProperty(x)) {
            track.unshift({ key: openers[x], index });
          } else {
            if (track.length > 0) {
              if (track[0].key === x) {
                track.shift();
              } else {
                  s[index] = ""
              }
            } else {
                s[index] = ""
            }
          }
        }
      }
    });
    if (track.length > 0) {
      for (let x of track) {
        s[x.index] = "";
      }
    }
  }
  return s.join('')
};

console.log(minRemoveToMakeValid("(a(b(c)d)")); //a(b(c)d)
console.log(minRemoveToMakeValid("))((")) //""
console.log(minRemoveToMakeValid("a)b(c)d")); //"ab(c)d"
//console.log(minRemoveToMakeValid("lee(t(c)o)de)")) //"lee(t(c)o)de"
//console.log(minRemoveToMakeValid("))((")); // ""
//console.log(minRemoveToMakeValid("())()(((")) // ()()
//console.log(minRemoveToMakeValid("lee(t(c)o)de)")) //"lee(t(c)o)de"
