var isPalindrome = function (str) {
  //define the reversed string
  //split to seperate each char and store to an array
  //reverse to change the order or chars
  //join to reunite all array chars into a string
  var reversedStr = str.split("").reverse().join("");
  if (reversedStr === str) {
    return true;
  } else {
    return false;
  }
};
// var isPalindrome = function (str) {
//   //create a new str var
//   let reversed = "";
//   //loop through str to grab each character
//   for (let char of str) {
//     reversed = char + reversed;
//   }
//   //push to the reversed string
//   return reversed;
// };
