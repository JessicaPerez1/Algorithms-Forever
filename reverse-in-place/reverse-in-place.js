// - To reverse an array "in place" means to reverse the original array without creating a brand new array.
//This can be achieved by swapping elements within the original array.
//- Return the array after it has been reversed.
// - e.g.given the following array
//     var arr = [2, 4, 6, 8];
// - The original`arr` array should be returned, but with it's elements in reverse order.
//     [8, 6, 4, 2];
//map, filter, for each are non-destructive methods

var reverseInPlace = function (arr) {
  //get the 1st element
  let firstIndex = 0;
  //get the last element
  let lastIndex = arr.length - 1;
  //check if the first index is still less than the last
  while (firstIndex < lastIndex) {
    //SWAP the elements at the first and last index
    //put the first element in a temporary place
    let temp = arr[firstIndex];
    //move the second element to the first
    arr[firstIndex] = arr[lastIndex];
    //put the first element in the seconds elements place
    arr[lastIndex] = temp;

    firstIndex++;
    lastIndex--;
  }
  //return the result array
  return arr;
};


