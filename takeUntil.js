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

//____________________Take unit ________________________

const takeUntil = function(array, callback) {
  finalArr = [];
  for (let arr of array){
    if (callback(arr)){
      break;
    } else {
      finalArr.push(arr);
    }
  }
  return finalArr;
}
//____________________Test ________________________

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);