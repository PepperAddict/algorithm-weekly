var twoSum = function(nums, target) {
    let keepIndex = new Map();
    let result = [0, 0] // by default, let's set it to 0 for both index.
    for (let i = 0; nums.length; i++) {
        
        let inBetween = target - nums[i]  // step 1: we get the mysterious x
        
        // step 3: we search the map for the key for the mysterious x and we return it
        // as the new array with the index.
        if (keepIndex.has(inBetween)) {
            result[0] = keepIndex.get(inBetween); //get the value of what we stored which was the index of mysterious x
            result[1] = i;
            return result;
        }
        // step 2: while we loop, we add each value and index since we need to output the index
        // to the new map
        keepIndex.set(nums[i], i)
    }

    return result;
}

twoSum([2,7,11,15], 9)