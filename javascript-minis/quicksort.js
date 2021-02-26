//quicksort is a recursive function 

function qsort(arr) {

    

    //things less than pivot goes to left pile
    const left = []

    //things greater than pivot goes to right pile
    const right = []

    if (arr.length <= 1) {
        return arr
    } else {
        const [pivot, ...rest] = arr

        rest.forEach((each) => {
             each < pivot ? left.push(each) : right.push(each)
        })
        return [...qsort(left), pivot, ...qsort(right)]
    }
    
}

console.log(qsort([5, 2, 7, 9, 6, 1, 4, 5, 0]))