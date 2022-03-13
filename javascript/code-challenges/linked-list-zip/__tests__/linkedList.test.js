'use strict';

const { LinkedList, linkedListZip } = require('../LinkedList.js');



describe('test linkedList class', () => {

    it('test creating a linked list with head', () => {
        const ll = new LinkedList();
        expect(ll).toBeInstanceOf(LinkedList);
        expect(ll.head).toBeNull();
    });


    it('test insert method', () => {
        const ll = new LinkedList();
        ll.insert(1);
        expect(ll.head.value).toEqual(1);
    });

    it('test linkedListZip', () => {
        let ll1 = new LinkedList();
        ll1.insert(1);
        ll1.insert(2);



        let ll2 = new LinkedList();
        ll2.insert(5); //head.next.next.next
        ll1.insert(2);//head.next.next
        ll1.insert(3);//head.next
        ll1.insert(4);//head

        let res = linkedListZip(ll1, ll2);


        expect(res.toStringValue()).toEqual("{1} -> {2} -> {2} -> {3} -> {5} -> {4} -> NULL");

      

    });
    // 4 -> 5 -> 3 -> 2 -> 2 -> 1 -> Null

});