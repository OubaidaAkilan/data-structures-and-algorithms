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

    it('inserts new node(s) at the END of the list', () => {
        const list = new LinkedList();
        list.append('thing');
        list.append('other thing');
        list.append('more stuff');
        let currentNode = list.head;
        while(currentNode.next !== null) {
          currentNode = currentNode.next;
        }
        expect(currentNode.value).toEqual('more stuff');
        expect(currentNode.next).toBeNull();
      });

      it('inserts a node  in the head of a linked list', () => {
        const list = new LinkedList();
        list.append('thing');
        list.append('other thing');
        list.append('thing too');
        list.insertBefore('thing', 'test me');
        let currentNode = list.head;
        while(currentNode.next.value !== 'thing') {
          currentNode = currentNode.next;
        }
        expect(list.head.value).toEqual('test me');
        expect(list.head.next.value).toEqual('thing');
      });

   
      
      it('inserts a node  in the last of a linked list', () => {
        const list = new LinkedList();
        list.append('other thing');
        list.append('thing too');
        list.append('thing');
        list.insertAfter('thing', 'test me');
        let currentNode = list.head;
        while(currentNode.value !== 'thing') {
          currentNode = currentNode.next;
        }
        expect(currentNode.value).toEqual('thing');
        expect(currentNode.next.value).toEqual('test me');
        expect(currentNode.next.next).toBeNull();
      });




});


