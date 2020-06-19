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


const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  };
  for (let key1 of keys1){
    if ( Array.isArray(object1[key1]) && Array.isArray(object2[key1]) ){
      return eqArrays(object1[key1], object2[key1]);
    } else if (object1[key1] !== object2[key1]){
      return false;
    }
  }
  return true;
};



const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if ( eqObjects ( actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)}!== ${inspect(expected)}`);
  }

};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false