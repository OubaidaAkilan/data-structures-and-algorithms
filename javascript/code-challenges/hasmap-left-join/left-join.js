'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    append(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
    }
}

class HashTable {
    constructor(size) {
        this.size = size;
        this.map = new Array(size);
    }
    hash(key) {
        return key.split('').reduce((acc, char) => {
            return acc + char.charCodeAt(0);
        }, 0) * 19 % this.size;
    }
    // add data
    add(key, value) {
        let hash = this.hash(key);
        if (!this.map[hash]) {
            this.map[hash] = new LinkedList();
        }
        let entry = { [key]: value }
        this.map[hash].append(entry);
    }
    // Search data
    get(key) {
        let hash = this.hash(key);
        if (this.map[hash]) {
            return this.map[hash];
        } else {
            return null;
        }
    }
    contains(key) {
        let hash = this.hash(key);
        if (this.map[hash]) {
            return true;
        }
        return false;
    }

    // leftJoin
    leftJoin(leftHash, rightHash) {
        let arr = [];
        let newArr = [];
        for (let i = 0; i < leftHash.map.length; i++) {
            newArr = [];
            if (leftHash.map[i]) {
                const lKey = Object.keys(leftHash.map[i].head.value);
                const lValue = Object.values(leftHash.map[i].head.value);
                newArr = newArr.concat(lKey);
                newArr = newArr.concat(lValue);
                if (rightHash.map[i]) {
                    const rKey = Object.keys(rightHash.map[i].head.value);
                    const rValue = Object.values(rightHash.map[i].head.value);
                    if (rKey[0] === lKey[0]) {
                        newArr = newArr.concat(rValue);
                    }
                } else {
                    newArr.push("null");
                }
                arr.push(newArr);
            }
        }
        return arr;
    }

}


module.exports = {
    LinkedList,
    Node,
    HashTable
};