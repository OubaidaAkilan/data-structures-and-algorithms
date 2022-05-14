'use strict';


const HashMap = require('../HashTable.js');



describe('test for hash table or map', () => {

    const testHash = new HashMap(60);

    it('test the set method', () => {
        testHash.set('ahmad', 'superMan');
        expect(testHash.get('ahmad').ahmad).toEqual('superMan');

    });


    it('test methods', () => {
        testHash.set('omar', 'supiderMan');
        // testHash.set('omar', 'batMan');
        expect(testHash.get('omar').omar).toEqual('supiderMan');
        expect(testHash.contains('omar')).toEqual(true);
        expect(testHash.contains('d')).toEqual(false);
        // console.log(testHash.keys());
        expect(testHash.keys()).toEqual([33, 49]);

    });






});


