// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

var reverse = function (str) {
  var result= "";
  for(var i=str.length; i>=0; i--){
    result += str.charAt(i);
  }
  return result ;
}