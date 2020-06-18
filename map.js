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




const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}


const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
//console.log(results1);

assertArraysEqual(results1,[ 'g', 'c', 't', 'm', 't' ])