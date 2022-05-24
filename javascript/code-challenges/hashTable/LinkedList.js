'use strict';
const Node = require('./Node');
module.exports = class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {

        const node = new Node(value);

        if (!this.head) {
            this.head = node;
            return;
        }
        let currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }

        currentNode.next = node;

    }

    get(key) {
        let currentNode = this.head;
        while (currentNode) {
            if (key in currentNode.value) {
                return currentNode.value;
            }
            currentNode = currentNode.next;
        }
        return 'this item is not exist';
    }
}
