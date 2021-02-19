// we want to sort an array and we'll use the insertion sort algorithm.
// which is it checks one digit at a time and keep moving right.

let insertSort = function (list) {


  for (let x = 1; x < list.length; x++) {
      let breakpoint = list[x]


    //while breakpoint is more than 0 and left is greater than breakpoint
    while (list[x - 1] > breakpoint) {
        

      //swap the two places
      list[x] = list[x -1];
      list[x -1] = breakpoint;

      //change breakpoint to go backwards
       x--
    }
  }
  return list;
};

console.log(insertSort([3, 2, 1, 4]));
