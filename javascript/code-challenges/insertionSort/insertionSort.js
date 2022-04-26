'use strict';

// let array = [8, 20, 5, 3, 2];

function insertionSort(arr) {
    let i = 0;
    while (i < arr.length) {
        for (let m = 0; m < arr.length; m++) {
            if (arr[m] > arr[m + 1]) {
                arr[m] = arr[m] * arr[m + 1];
                arr[m + 1] = arr[m] / arr[m + 1];
                arr[m] = arr[m] / arr[m + 1];
            }
        }
        i++;
    }
    return arr;
}
// console.log(insertionSort(array));
module.exports = insertionSort;

