//Given a string S, check if the letters can be rearranged so that two characters that are adjacent to each other are not the same.

//If possible, output any possible result.  If not possible, return the empty string.

var reorganizeString = function (S) {
  let hash = {};

  for (let c of S) {
    hash[c] = hash[c] + 1 || 1; //add to itself if already has a value
  }

  let sort = Object.keys(hash).sort(function (a, b) {
    let nugget = hash[b] - hash[a];
    
    if (nugget >= 2) {
      hash = null; // cancel the whole operation if the difference is too great
    }

  });

  //now that we organized it into a hash, let's change it to how they want it
  let res = [];
 
  if (typeof hash === "object" && hash !== null) {
    for (let i = 0; i < sort.length; i++) {
      
    }
  }

  console.log(res.join(''))
};

reorganizeString("aab"); //aba
reorganizeString("aaab"); // empty or false
