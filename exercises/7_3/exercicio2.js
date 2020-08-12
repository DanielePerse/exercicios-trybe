const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);

assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);

const newList = [3, 5, 7, 9];
myRemove(newList, 3);
assert.deepStrictEqual(newList, [3, 5, 7, 9]);

assert(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);



