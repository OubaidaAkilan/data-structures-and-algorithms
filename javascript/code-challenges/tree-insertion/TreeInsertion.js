'use strict';

class Hashmap {
    constructor(size) {
        this.size = size;
        this.map = new Array(size);
        this.size2 = 0;
    }
    hash(key) {
        return key % this.size
    }
    add(key, value) {
        let hash = this.hash(key);
        if (!this.map[hash]) {
            this.map[hash] = value;
        }
        let entry = { [key]: value }
        this.map[hash] = entry;
        this.size2++;
        return hash

    }
    treeIntersection(bT1, bt2) {
        let array = [];
        if (bT1.root && bt2.root) {
            let hashmap = new Hashmap(5000);
            let firstTreeValues = bT1.inOrder();
            firstTreeValues.forEach(value => {
                hashmap.add(value);
            });

            let secondTreeValues = bt2.inOrder();
            secondTreeValues.forEach(value => {
                let key = hashmap.hash(value);
                if (hashmap.map[key]) {
                    array.push(Object.keys(hashmap.map[key]));
                }
            });
            return array;
        }
        else {
            return 'No Tree is Added';
        }

    };
}


module.exports = Hashmap;