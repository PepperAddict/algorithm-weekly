var reverse = function(x) {
    let isItNeg = x < 0; //true or false
    let result;
    //to work with our problem, we have to convert to positive for now
    function convert(x) {
        return x * -1
    }
    let newNums = isItNeg ? convert(x) : x

    //convert value to string, split it into an array, reverse it, join it back together
    // and then convert it to a number. This will also remove the 0 if there are any

    result = parseInt(newNums.toString().split('').reverse().join(''))

    //to deal with the overflow find out what 32 bit is and if it's great than that, 
    //make it into a 0
    if (result > Math.pow(2,31)) {
        result = 0
    }

    //now if it was neg, convert it back to neg
    return (isItNeg) ? convert(result): result
}

reverse(-120)
reverse(1534236469)