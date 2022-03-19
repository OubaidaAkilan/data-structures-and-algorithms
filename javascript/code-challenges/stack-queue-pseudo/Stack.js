'use strict';
const Node = require('./Node');


class Stack {
    constructor() {
        this.top = null;
        this.count = 0;
    }


    push(value) {
        this.count++;
        const node = new Node(value);
        if (!this.top) {
            this.top = node;
        } else {
            node.next = this.top;
            this.top = node;
        }
        return this.top.value;
    }


    pop() {
        if (!this.top) {
            return 0;
        } else {
            let res = 0;
            let index = this.count;
            this.count--;
            index = index - this.count; // index always equals 1
            while (index) {
                res = this.top.value;
                this.top = this.top.next;
                // console.log('this.top',this.top);
                if (!this.top) {
                    break;
                }
                index--;
            }
            return res;

        }


    }


    peek() {
        if (!this.top) {
            return 0;
        } else {
            return this.top.value;
        }
    }

    // tail() {
    //     if (!this.top) {
    //         return 0;
    //     } else {
    //         let tail;
    //         let currentNode = this.top;
    //         while (currentNode) {
    //             // console.log('currentNode', currentNode.value);
    //             currentNode = currentNode.next;
    //             tail = currentNode;
    //             if (!tail.next) {
    //                 // console.log('tail', currentNode.value);
    //              return tail.value;
    //             }
    //         }
    //       return tail.value;
    //      }


    // }

    isEmpty() {
        if (!this.top) {
            return true;
        } else {
            return false;
        }
    }
}

module.exports = Stack;