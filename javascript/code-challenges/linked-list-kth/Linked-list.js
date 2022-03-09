'use strict';


const Node = require('./Node');



class LinkedList {
    constructor() {
        this.head = null;
    }
    insertNode(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    };
kthFromEnd(value){
    if (this.head) {
        let currentNode =this.head;
        let count =1;
        while (currentNode.next) {
            currentNode =currentNode.next;
            count++;            
        }        
        let index =count -value;
        if (index > 0) {
            let currentNode =this.head;
            let count =1;
            while (count != index && currentNode.next) {
                count++;
                currentNode =currentNode.next;
            }
            // console.log(currentNode.value);
            return currentNode.value;
        }else{
            console.log('the value should be less than length');
        }
    } else{
        console.log("head is empty");
    }
}
}








module.exports = LinkedList;
