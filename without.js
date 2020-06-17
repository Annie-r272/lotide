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

const without = function(source, itemsToRemove) {
  let finalArr = [];
  for (let i = 0; i < source.length; i++){
    let result = true;
    for (let j = 0; j < itemsToRemove.length; j++){
      if (source[i] === itemsToRemove[j]) {
        result = false;
      } 
    }
    if (result){
      finalArr.push(source[i]);
    }
  }
  return finalArr;
}


 
const words = ["3", "4", "6", 7, 9];
let result1 = without(words, ["6"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(result1, ["3", "4", 7, 9]); 
