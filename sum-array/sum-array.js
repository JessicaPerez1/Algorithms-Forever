// Write code to add all the numbers in `arr` and return the total

// set up a total
// go through the array
// grab each Element
// add them to total
// return total

var sumArray = function (arr) {
  var total = 0;
  arr.forEach(function (number) {
    total += number;
  });
  return total;
};
