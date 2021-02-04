//Given a string S, check if the letters can be rearranged so that two characters that are adjacent to each other are not the same.

//If possible, output any possible result.  If not possible, return the empty string.


var reorganizeString = function(S) {


    let hash = {};

    for (let c of S) {
        hash[c] = hash[c] + 1 || 1; //add to itself if already has a value
    }


    let sort = Object.keys(hash).sort();

    console.log(sort)

    let res = [];
    let index = 0;

    for (let i = 0;i<sort.length;i++) {
        let occur = hash[sort[i]];
        if (occur > parseInt((S.length + 1)/2)) return "";

        for (let j = 0;j < occur;j++) {
            if (index >= S.length) index = 1;
            res[index] = sort[i];
            index += 2;
        }
    } 
    console.log(res.join('')) 



}

reorganizeString('aab') //aba
reorganizeString('aaab') // empty or false