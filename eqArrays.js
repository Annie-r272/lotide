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

module.exports = eqArrays;