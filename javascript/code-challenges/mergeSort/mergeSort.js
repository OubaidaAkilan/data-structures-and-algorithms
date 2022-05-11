'use strict';

const arr = [31, 27, 28, 42, 13, 8, 11, 30, 17, 41, 15, 43, 1, 36, 9, 16, 20, 35, 48, 37, 7, 26, 34, 21, 22, 6, 29, 32, 49, 10, 12, 19, 24, 38, 5, 14, 44, 40, 3, 50, 46, 25, 18, 33, 47, 4, 45, 39, 23, 2];
// const arr = [8, 4, 23, 42, 16, 15];


const merge = (array1, array2) => {
    let combined = []
    let i = 0
    let j = 0
    while (i < array1.length && j < array2.length) {
        if (array1[i] < array2[j]) {
            combined.push(array1[i])
            i++
        } else {
            combined.push(array2[j])
            j++
        }
    }
    while (i < array1.length) {
        combined.push(array1[i])
        i++
    }
    while (j < array2.length) {
        combined.push(array2[j])
        j++
    }
    return combined;
}

const mergeSort = (arr) => {

    if (arr.length === 1) {
        return arr;
    } else {

        let n = arr.length;
        let mid = Math.floor(n / 2);

        if (n > 1) {
            let left = arr.slice(0, mid);
            let right = arr.slice(mid);

            let leftSortArr = mergeSort(left);
            let rightSortArr = mergeSort(right);


            return merge(leftSortArr, rightSortArr);
        }
    }

};

console.log(mergeSort(arr));

module.exports = mergeSort;



