/*
function getLargest(a, b, c, d, e) {
    let numArray = [b, c, d, e];
    let largest = a;
  
    for (let item of numArray) {
      if (item > largest) {
        largest = item;
      }
    }
    return largest;
  }
  
console.log(getLargest(1, 10, 5));
console.log(getLargest(2, 3, 4, 5, 1));
*/

function largest(arr) {
    let i;
    let max = arr[0];
    for (i = 1; i < arr.length; i++) {
        if (arr[i] > max)
            max = arr[i];
    }
  return max;
}
let arr = [10, 324, 45, 90, 9808];
console.log(( largest(arr)));