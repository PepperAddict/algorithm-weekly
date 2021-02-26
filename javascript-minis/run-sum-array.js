var runningSum = function(nums) {
    let track = [];

    for (let num =0; num < nums.length; num++) {

        //can't check previous when its on first value so lets check if first value for track
        if (track.length < 1) {
            track[num] = nums[num]
        } else {
            //since we are adding onto each other, we'll check prev and add with current index. 
            track[num] = track[num -1] + nums[num]
        }
 
    }
    return track
}

console.log(runningSum([1, 2, 3, 4])) //[1,3,6,10]
console.log(runningSum([1, 1, 1, 1, 1])) //[1,2,3,4,5]
console.log(runningSum([3, 1, 2, 10, 1])) //[3,4,6,16,17]
