// Write code to create a function takes a string and returns the string with all of the letter cases swapped

var swapCase = function (str) {
  var result = "";
  //loop through the string
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    //check what case is each letter
    //if its uppercase, turn to lowercase
    //store to result
    if (letter === letter.toUpperCase()) {
      result += letter.toLowerCase();
    } else {
      //if lowercase, turn to uppercase
      //store to result
      result += letter.toUpperCase();
    }
  }
  return result;
};
