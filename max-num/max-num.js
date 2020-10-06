// Write code to return the largest number in the given array

var maxNum = function (arr) {
  //set the first number as the max
  var highest = arr[0];
  //how long is the array?
  if (arr.length === 1) {
    //only 1, return the first element
    return highest;
  } else {
    //go through all the numbers in the array starting at the second number
    arr.forEach(function (num) {
      if (num > highest) {
        highest = num;
      }
    });
    return highest;
  }
};
