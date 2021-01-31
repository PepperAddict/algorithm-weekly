//but they want an O (log n) binary search



var search = function (nums, target) { // O (n) 
    let num = nums.indexOf(target)
    console.log(num)
    return num
}


search([4,5,6,7,0,1,2], 0) // 4
search([4,5,6,7,0,1,2], 3)// -1
search([1], 0) // -1