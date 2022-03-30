'use strict';

const BST = require('../BST');



let newBts = null;

beforeAll(() => {


     newBts = new BST();
    newBts.add(23);
    newBts.add(8);
    newBts.add(42);
    newBts.add(27);
    newBts.add(105);
    newBts.add(15);
    newBts.add(16);
    newBts.add(30);
    newBts.add(1);
    newBts.add(90);

});

describe('Binary Search Tree', () => {

    it('constructor', () => {
        // console.log(newBts);
        expect(newBts.root.value).toEqual(23);
    });

    it('pre-order method', () => {

        // console.log(newBts.preOrder());
        expect(newBts.preOrder()).toEqual([23,  8,  1,  15, 16, 42, 27, 30, 105, 90]);
    });

    it('in-order method', () => {
        // console.log(newBts.inOrder());
        expect(newBts.inOrder()).toEqual([ 1,  8, 15, 16,  23,27, 30, 42, 90, 105]);
    });

    it('post-order method', () => {
        console.log(newBts.postOrder());
        expect(newBts.postOrder()).toEqual([1, 16,  15,  8, 30,27, 90, 105, 42, 23]);
    });

    it('add method', () => {
        newBts.add(100)
        // console.log(newBts.inOrder());
        expect(newBts.inOrder()).toEqual([ 1,  8, 15, 16,  23,27, 30, 42, 90, 100,105]);
    });

    it('contain method', () => {
        newBts.add(100);
        
        // console.log(newBts.inOrder());
        // expect(newBts.inOrder()).toEqual([ 1,  8, 15, 16,  23,27, 30, 42, 90, 100,105]);
        expect(newBts.contain(100)).toEqual(true);
    });

    it('contain method', () => {
        
        
        // console.log(newBts.inOrder());
        // expect(newBts.inOrder()).toEqual([ 1,  8, 15, 16,  23,27, 30, 42, 90, 100,105]);
        expect(newBts.contain(11)).toEqual(false);
        expect(newBts.contain(160)).toEqual(false);
    });



});