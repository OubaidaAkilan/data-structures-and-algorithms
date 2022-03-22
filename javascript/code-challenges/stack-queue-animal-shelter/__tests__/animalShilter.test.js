'use strict';


const AnimalShelter =require('../AnimalShelter');





describe('test creating AnimalShelter queue' ,()=>{


    it('test instance AnimalShelter' ,()=>{
        let animalShelter =new AnimalShelter();

        expect(animalShelter instanceof AnimalShelter).toBeTruthy();
    });

    it('test enqueue AnimalShelter' ,()=>{
        let animalShelter =new AnimalShelter();

        animalShelter.enqueue('dog');
        animalShelter.enqueue('cat');
        animalShelter.enqueue('dog');
        animalShelter.enqueue('cat');
        animalShelter.enqueue('dog');
        animalShelter.enqueue('cat');

        expect( animalShelter.enqueue('cat')).toEqual('cat');
        expect( animalShelter.enqueue('rat')).toEqual('animal can be either a dog or a cat object. ');
    });


    it('test enqueue AnimalShelter' ,()=>{
        let animalShelter =new AnimalShelter();

        animalShelter.enqueue('dog');
        animalShelter.enqueue('cat');
        animalShelter.enqueue('dog');
        animalShelter.enqueue('cat');
        animalShelter.enqueue('dog');
        animalShelter.enqueue('cat');

        expect( animalShelter.dequeue('cat')).toEqual('cat');
        expect( animalShelter.dequeue('dog')).toEqual('dog');
        expect( animalShelter.dequeue('rat')).toBeNull();
    });


});

