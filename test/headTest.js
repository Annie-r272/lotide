const assertEqual = require('../assertEqual');
const head = require('../head');



// Test code

assertEqual(head([100, 6, 8, 98]), 0);
assertEqual(head(["kk", 6, 8, 98]), "kk");

