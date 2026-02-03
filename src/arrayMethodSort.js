'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const arr = this;
    const len = arr.length;

    // Simple bubble sort implementation
    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - i - 1; j++) {
        const shouldSwap = compareFunction
          ? compareFunction(arr[j], arr[j + 1]) > 0
          : String(arr[j]) > String(arr[j + 1]);

        if (shouldSwap) {
          // Swap arr[j] and arr[j + 1]
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }

    return arr;
  };
}

module.exports = applyCustomSort;
