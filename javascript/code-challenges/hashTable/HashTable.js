'use strict';
const LinkedList = require('./LinkedList');
class HashMap {
    constructor(size) {
        this.size = size;
        this.map = new Array(size);
    }

    hash(key) {
        // Razan >> 82+97+545 >> 350 >> (350*599)%size
        // let asciiSum = key.split('').reduce((acc,char)=>{
        //     return acc + char.charCodeAt();
        // },0);
        // let hashedKey = (asciiSum*599)%this.size;
        // return hashedKey;

        return key.split('').reduce((acc, char) => {
            return acc + char.charCodeAt();
        }, 0) * 599 % this.size;
    }

    set(key, value) {// Razan ,instructor
        let hashIndex = this.hash(key);
        // console.log({ hashIndex });//console.log('hashIndex' ,hashIndex);
        if (!this.map[hashIndex]) {
            this.map[hashIndex] = new LinkedList();
        }
        // {key:Razan,value:instuctor}
        // {Razan:instructor}
        let entryData = { [key]: value };
        this.map[hashIndex].append(entryData);

    }


    get(key) {
        let hashIndex = this.hash(key);
        if (this.map[hashIndex]) {
            return this.map[hashIndex].get(key);
        }

    }


    contains(key) {
        let hashIndex = this.hash(key);
        // console.log({ hashIndex });
        // console.log(' this.map[hashIndex] ', this.map[hashIndex]);// undifind if the hashIndex does not exist in the hash table

        if (this.map[hashIndex]) {
            let isExist = this.map[hashIndex].get(key);
            if (isExist == 'this item is not exist') {
                return false;
            } else {
                return true;
            }
        } else {
            return false;
        }
    }

    keys() {
        let collictionOfKeys = [];

        for (let hashIndex = 0; hashIndex < this.map.length; hashIndex++) {
            if (this.map[hashIndex]) {

                collictionOfKeys.push(hashIndex);
            }
        }
        return collictionOfKeys;
    }



}


const hashmap01 = new HashMap(60);
hashmap01.set('Razan', 'Isnstructor');
hashmap01.set('Batool', 'TA');
hashmap01.set('Mohammad', 'Learner');
hashmap01.set('Salam', 'Learner');
hashmap01.set('Salam', 'ssss');

console.log(hashmap01.keys());
// console.log(hashmap01.contains('Mohammad'));

// console.log(hashmap01.map[32]);
// console.log(hashmap01.map[51]);
// console.log(hashmap01.map[36]);
// console.log(hashmap01.map[46]);





module.exports = HashMap;