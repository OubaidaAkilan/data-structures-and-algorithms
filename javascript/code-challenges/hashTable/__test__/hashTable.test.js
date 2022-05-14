'use strict';


const HashMap = require('../HashTable.js');

const testHash = new HashMap(60);

describe('test for hash table or map', () => {

    it('test the keys method', () => {
        testHash.set('ahmad', 'superMan');
        testHash.set('omar', 'supiderMan');
        testHash.set('ali', 'batMan');
        expect(testHash.keys()).toEqual([33, 49, 50]);

    });


    it('test the set method', () => {
        // testHash.set('ahmad', 'superMan');
        expect(testHash.get('ahmad').ahmad).toEqual('superMan');

    });

    it('test the get method', () => {
        // testHash.set('omar', 'supiderMan');
        console.log(testHash.get('omar').omar);
        expect(testHash.get('omar').omar).toEqual('supiderMan');

    });



    it('test the contains method', () => {
        expect(testHash.contains('ali')).toEqual(true);
        expect(testHash.contains('d')).toEqual(false);
    });

});


