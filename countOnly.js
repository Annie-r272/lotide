const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

const countOnly = function(allItems, itemsToCount) {
  results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) { 
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

  
  const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "yy",
      "Kavith",
      "Jason",
      "Salima",
      "yy",
      "Fang",
      "Joe",
      "yy"
  ];
  
  const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "yy": true, "Fang":false });
  
  assertEqual(result1["Jason"], 1);
  assertEqual(result1["Karima"], undefined);
  assertEqual(result1["yy"], 3);