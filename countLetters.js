const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

const countLetters = function (ourString){
  results = {};
  for (let str of ourString) {
    if ( str !== " ") {
      if (results[str]) {
        results[str] += 1;
      } else {
        results[str] = 1;
      }
    }   
  }
  return results;
};

