// Write code to create a function that accepts a number (`n`) and returns a new number that satisfies the look-and-say-sequence
//The look and say sequence can be understood by reading a number out loud, digit by digit,
//but first saying the number of times each digit appears in a row.
//For example, given the following number:var n = 5442;
//There is ** one ** five, ** two ** fours, and ** one ** two.So the look - say - sequence of`n` should be`152412`.

var lookAndSay = function (n) {
  //make n into a string
  let numberString = n.toString();
  //create a result string
  let result = "";
  //the digit count is 1
  let digitCount = 1;
  //iterate through the string/digits
  for (let i = 0; i < numberString.length; i++) {
    const currentNumber = numberString[i];
    const nextNumber = numberString[i + 1];
    if (currentNumber === nextNumber) {
      //is the next number the same number?
      //if yes
      //bump up the digit count
      digitCount++;
    } else {
      //if no
      //add the digit count and the number to the result string
      result += digitCount;
      result += currentNumber;
      //reset the digit count to 1
      digitCount = 1;
    }
  }
  //return the result string
  return parseInt(result);
};
