'use strict';


const LinkedList = require('../Linked-list');



describe('Test linked-list class', () => {



    it('test creating a linked-list instance ', () => {
        const linkedList = new LinkedList();
        expect(linkedList).toBeInstanceOf(LinkedList);
        expect(linkedList.head).toBeNull();
    });


});

describe('Test insert node to a linked-list class', () => {



    it('test InsertNode method ', () => {
        const ll = new LinkedList();
        ll.insertNode('anything');
        // console.log(ll.head.value);
        expect(ll.head.value).toEqual('anything');
    });


});


describe('Test if the node exist or not  inside a linked-list class', () => {



    it('test Includes method ', () => {
        const ll = new LinkedList();
        ll.insertNode('a');
        ll.insertNode('b');
        ll.insertNode('c');
        ll.insertNode('d');

        //console.log(ll);

        const check = ll.nodeIsExist('d');
        // console.log(check);
        // console.log(ll.head.value);
        expect(true).toEqual(check);
    });


});





describe('Test convert all the values inside a linked-list to string', () => {



    it('test toString method ', () => {
        const ll = new LinkedList();
        ll.insertNode('a');
        ll.insertNode('b');
        ll.insertNode('c');
        

        //console.log(ll);

        const res = ll.toStringValue();
        console.log(res);
        
        expect("{c} -> {b} -> {a} -> NULL").toEqual(res);
    });


});