var numSquares = function(n) {
    //first check if n is perfect square 

    let stepTable = [0]
    let i, j



        //if the original number isn't a square, we have to create combinations. 

        for (i =1; i <= n; i++) {
            stepTable[i] = i;
  
            //for each of the i, we square each one while under the i
            for (j = 1; j * j <= i; j++) {
                let theSum = i
                let thePerfectSq = j * j
                let theRemainder = theSum - thePerfectSq


                stepTable[i] = Math.min(stepTable[i], stepTable[theRemainder] + 1)
            }
        }

    return stepTable[n]

}

//console.log(numSquares(25)) //1
//console.log(numSquares(2)) //2
//console.log(numSquares(5)) //2
//console.log(numSquares(8)) //2
//console.log(numSquares(12)) //3
console.log(numSquares(12))// 4
//console.log(numSquares(13)) // 2