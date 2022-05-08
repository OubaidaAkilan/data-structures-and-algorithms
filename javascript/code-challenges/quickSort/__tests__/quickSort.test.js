'use strict';

const { partition, quickSort } = require('../quickSort');

describe('Quick Sort', () => {
    it('sorting the array', () => {
        let array = [8, 4, 23, 42, 16, 15];
        expect(quickSort(array)).toEqual([8, 4, 23, 42, 16, 15]);
    });
});