'use strict';

const insertionSort = require('../insertionSort');

describe('Insertion Sort', () => {
    it('sorting the array', () => {
        let array = [8, 20, 5, 3, 2];
        expect(insertionSort(array)).toEqual([2, 3, 5, 8, 20]);
    });
});