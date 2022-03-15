'use strict';

const { LL } = require('./LL');



class Queue {
    constructor() {
        this.linkedStorage = new LL();
        this.count = 0;
        this.back = 0;
        this.front = 0;
    }

    enqueue(value) {
        this.count++;
        this.linkedStorage.insert(value);
        this.back = this.linkedStorage.head;
        // console.log(" this.back =this.linkedStorage.head:", this.back);
    }

    dequeue() {
        let currentNode = this.back;//it is the head
        let index = this.count;
       // console.log('index =this.count', index);

        // console.log('currentNode' ,currentNode);
        if (this.count == 1) {
         //   console.log('this.back.value', this.back.value);
            this.front = this.back;
            this.back = 0;
            this.count--;
            return this.front.value;
        } else {
            this.count--;
            if (this.count < 0) {
                return 0;
            } else {
                while (index - 1) {
           //         console.log('index', index);
                    currentNode = currentNode.next;
                    // console.log(currentNode);
                    this.front = currentNode;
                    index--;
                    if (!this.front.next) {
                        break;
                    }
                    // console.log('currentNode.value' ,currentNode.value);
                }
                return this.front.value;
            }

        }



    }

    peek() {
        if (!this.back) {
            return this.front = 0;
        } else {
            return this.front.value;
        }
    }


    isEmpty() {
        if (!this.back) {
            return true;
        }
        return false;
    }

}


module.exports = Queue;