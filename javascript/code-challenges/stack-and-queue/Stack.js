'use strict';

const { LL } = require('./LL');



class Stack {
    constructor() {
        this.top = null;
        this.LinkedListStorage = new LL();
        this.count = 0;
    }

    push(value) {
        this.LinkedListStorage.insert(value);
        this.top = this.LinkedListStorage.head;
        this.count++;
         return this.top.value;

        // console.log("LinkedListStorage",this.LinkedListStorage);
        // console.log("this.top.value", this.top.value);
        // console.log("this.count",this.count);
    }

    pop() {
        if (!this.top) {
            return null;
        } else {
            let index = this.count;
            this.count--;
            index = index - this.count;
            // console.log('index', index);
            while (index) {
                let nextNode = this.top.next;
                // console.log('nextNode' ,nextNode);
                if (!nextNode) {
                    this.top = 0;
                    return 0;
                } else {
                    this.top = nextNode;
                    index--;
                }

                // console.log('index --' ,index);
            }
        }
        // console.log('this.top.value', this.top.value);
        return this.top.value;
    }

    peek() {
        if (!this.top) {
            // console.log('peek', this.top);
            return this.top = 0;
        } else {
            return this.top.value;
        }

    }

    isEmpty() {
        if (!this.top) {
            return true;
        }
        return false;
    }
}


module.exports = Stack;