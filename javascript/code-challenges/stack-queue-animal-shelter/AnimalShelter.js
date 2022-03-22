'use strict';

class AnimalShelter {
    constructor() {
        this.storage = new Array();
    }

    enqueue(animal) {
        if (animal == 'cat' || animal == 'dog') {
            this.storage.push(animal);
            return animal
        } else {
            return 'animal can be either a dog or a cat object. ';
        }

    }

    dequeue(pref) {
        let animal = this.storage.shift();
        if (animal == pref) {
            return animal;
        } else {
            while (pref != animal) {
                animal = this.storage.shift();
                if (!animal) {
                    return null;
                }
            }
            return animal;
        }

    }
}

module.exports = AnimalShelter;

// let animalShelter =new AnimalShelter();

// animalShelter.enqueue('dog');
// animalShelter.enqueue('cat');
// animalShelter.enqueue('dog');
// animalShelter.enqueue('cat');
// animalShelter.enqueue('dog');


// console.log(animalShelter.storage);

// console.log(animalShelter.dequeue('cat'));
// console.log(animalShelter.storage);

// console.log(animalShelter.dequeue('ss'));
// console.log(animalShelter.storage);