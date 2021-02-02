function findSignatureCounts(arr) {
    arr.unshift(null)
    let count = {}
    for (let x = 1; x < arr.length; x++) {
        let countTwo = 1
        if (x == arr[x]) {
            count['student' + x] = countTwo
        } else {
           count['student' + x] = countTwo + 1
        }
    }
    console.log(count)
    return Object.values(count)
}

findSignatureCounts([2, 1]) //[2, 2] 
 findSignatureCounts([1, 2]) //[ 1, 1]
 findSignatureCounts([2, 1]) // [2, 2]