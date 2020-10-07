var acronymBuilder = function (str) {
  var result = "";
  //split the words in the str and store in an array
  var words = str.split(" ");
  //loop through the array of words
  words.forEach((word) => {
    //get the first letter of each word
    //make it uppercase
    let firstChar = word[0].toUpperCase();
    //add it to result
    result += firstChar;
  });
  //return in the result
  return result;
};
