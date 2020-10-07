// Write code to create a function that accepts a string (`str`) and
//returns the longest word in the string

var longestWord = function (str) {
  //store the words into an array
  let words = str.split(" ");
  //establish the longest word to be the 1st of the words array
  var longestWord = words[0];
  words.forEach((word) => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });
  return longestWord;
};
