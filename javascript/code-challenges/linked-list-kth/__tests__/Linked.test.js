'use strict';

const LinkedList = require('../Linked-list');



describe('test linked list kth', () => {
let consoleSpy ;

    beforeEach(()=>{
        consoleSpy =jest.spyOn(console ,'log').mockImplementation();
    });

    afterEach(()=>{
        consoleSpy.mockRestore();
    });

    it('test creating a linked-list instance ', () => {
        const linkedList = new LinkedList();
        expect(linkedList).toBeInstanceOf(LinkedList);
        expect(linkedList.head).toBeNull();
    });

    it('test InsertNode method ', () => {
        const ll = new LinkedList();
        ll.insertNode('anything');
        // console.log(ll.head.value);
        expect(ll.head.value).toEqual('anything');
    });



    it('test kthFromEnd', () => {
        const list1 = new LinkedList();
        list1.insertNode(1);
        list1.insertNode(2);
        list1.insertNode(3);
        list1.insertNode(4);
        list1.insertNode(5);
        list1.insertNode(6);

       const res = list1.kthFromEnd(5);

        expect(res).toEqual(6);
        const res2 = list1.kthFromEnd(6);
        expect(consoleSpy).toHaveBeenCalledWith('the value should be less than length')
        

    });



});
