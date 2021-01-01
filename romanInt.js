var romanToInt = function(s) {

    let dict = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let total = 0;

    for (let i = 0; i < s.length; i++) {
        // in our loop, let's get the current value of each string
        let currentVal = dict[s.charAt(i)]
        // we need to figure out if we'd subtract or add
        // so we need to keep track of the following index
        let nextVal = dict[s.charAt(i + 1)]

        //check if the current val is more than next if so add to total otherwise 
        // subtract nextval to current val
        if (currentVal >= nextVal && nextVal) {
            total += currentVal
        } else {
            //nextval may not have a value, so in that case, just send in currentVal
            let subtract = (nextVal) ? nextVal - currentVal: currentVal;
            total += subtract
            // since we used nextval, we have to skip it for the next loop.
            i++;
        }
        
    }
    return total
}

romanToInt('MCMXCIV') // 1994
romanToInt('IV') //should output to 4
romanToInt('MIV') //should output to 1003
romanToInt('III') //should output 3