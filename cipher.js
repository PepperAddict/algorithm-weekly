function rotationalCipher(input, rotationFactor) {
  let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  let intoArray = input.split("");
  let ifLetters = /[a-zA-Z]/;
  let ifNumbers = /[0-9]/;

  for (let indi = 0; indi < intoArray.length; indi++) {
    if (intoArray[indi].match(ifLetters)) {
      let alphabetIndex = alphabet.indexOf(intoArray[indi].toLowerCase());
      let k = (alphabetIndex + rotationFactor) % alphabet.length;
      intoArray[indi] = intoArray[indi].match(/[A-Z]/)
        ? alphabet[k].toUpperCase()
        : alphabet[k];
    } else if (intoArray[indi].match(ifNumbers)) {
      let numberIndex = numbers.indexOf(intoArray[indi]);
      let k = (numberIndex + rotationFactor) % numbers.length;
      intoArray[indi] = numbers[k];
    }
  }
  console.log(intoArray.join(""));
//   return intoArray.toString();
}

rotationalCipher("All-convoYs-9-be:Alert1.", 4); //Epp-gsrzsCw-3-fi:Epivx5.
//rotationalCipher("abcdZXYzxy-999.@", 200) //stuvRPQrpq-999.@
