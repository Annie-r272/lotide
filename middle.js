const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    let result = true;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        result = true;
      } else {
        return false;
      }
    }
    return result;
  } else {
    return false;
  }
};

const assertArraysEqual = function(actual, expected) {
  if ( eqArrays ( actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const middle = function(array) {
  //let midIndex = 0;
  let midArr = [];
  let midIndex = Math.floor(array.length / 2);
  if ( array.length % 2 === 0 && array.length > 2) {
    midArr = array.slice(midIndex-1, midIndex+1);
  } else if (array.length > 2) {
    midArr = array.slice(midIndex, midIndex+1);
  }
  return midArr;
}

console.log(assertArraysEqual(middle([1, 2, 3]), [2]));
console.log(assertArraysEqual(middle([1, 2, 3, 6 ,4, 5]), [3, 6]));
console.log(assertArraysEqual(middle([1, 2]), []));
console.log(assertArraysEqual(middle([1]), []));