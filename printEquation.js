const equalZero = (num) => {
  const splitNum = num.toString().split("");
  let equations = ["-", "+"];

  const newNum = splitNum.length;

  //This function helps to try to find every combination with 
  //equation within the length requires and return those only

  const combinationSet = (input, length, curstr = "") => {
    if (curstr.length == length) {
      return [curstr];
    } else {
      let okay = [];
      for (let i = 0; i < input.length; i++) {
        let combined = curstr + input[i];
        okay = okay.concat(combinationSet(input, newNum, combined));
      }
      return okay
    }
  };

  const combinations = combinationSet(equations, newNum);

  //This for loop digs into the input numbers and concats the numbers digit from 
  //the new combinations together

  let newArr = [];

  for (let indi of combinations) {
    let indiarray = indi.split("");
    let ele = [];
    for (let ok of indi) {
      ele.push(ok);
    }
    let digi = -1;
    newArr.push(
      [].concat(
        ...splitNum.map((e) => {
          do {
            ++digi;
            return [e, ele[digi]];
          } while (digi < indiarray.length);
        })
      )
    );
  }
  //This for loop cleans up the new combined array to be able to apply the math
  //equation and if it equals to 0 have it console log what was used and its success
  //message and if it doesn't say it doesn't. 

  for (let x of newArr) {
    x.pop()
    let stringit = eval(x.join(""));
    let prettyit = x.join("");
    let removeNums = prettyit.replace(/[0-9]/g, "");

    if (stringit === 0) {
      console.log(prettyit + " equal zero " + "used " + removeNums);
    } else {
      console.log(prettyit + " does not equal to zero");
    }
  }
};

equalZero(101011);
