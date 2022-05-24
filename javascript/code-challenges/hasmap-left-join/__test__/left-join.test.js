"use strict";

const { LinkedList, Node, HashTable } = require("../left-join");

describe('Node module', () => {
    it('constructor()', () => {
        let value = 'my node value';
        let newNode = new Node(value);
        expect(newNode.value).toEqual(value);
        expect(newNode.next).toEqual(null);
    })
})

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

describe('linked list module', () => {

    it('constructor()', () => {
        let newList = new LinkedList();
        expect(newList.head).toEqual(null);
    })

    it('append', () => {
        let newList = new LinkedList();
        let initialValue = 'first value';
        newList.append(initialValue);
        expect(newList.head.value).toEqual(initialValue);
    })
})

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

describe("Hash Table", () => {
    it("Create The Hash Table", () => {
        let hashTable = new HashTable(5000);
        expect(hashTable.size).toEqual(5000);
    });

    it("Adding a key/value to your hashtable results in the value being in the data structure", () => {
        let hashTable = new HashTable(5000);
        let key = "add";
        hashTable.add(key, 500);
        expect(hashTable.map[hashTable.hash(key)]).toBeDefined();
    });

    it("Retrieving based on a key returns the value stored", () => {
        let hashTable = new HashTable(5000);
        hashTable.add("name", "sara");
        let result = hashTable.get("name");
        expect(result.head.value).toEqual({ "name": "sara" });
    });

    it("Successfully returns null for a key that does not exist in the hashtable", () => {
        let hashTable = new HashTable();
        expect(hashTable.get("Hello")).toBeNull();
    });

    it("Successfully handle a collision within the hashtable", () => {
        let hashTable = new HashTable(5000);
        hashTable.add("mane", "sara");
        hashTable.add("name", "sara");
        let result = hashTable.get("name");
        expect(result.head.next.value).toEqual({ "name": "sara" });
    });

});

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

describe('Left Join', () => {
    let leftMap;
    let rightMap;
    beforeAll(() => {
        leftMap = new HashTable(5000);
        leftMap.add("fond", "enamored");
        leftMap.add("warth", "anger");
        leftMap.add("diligent", "employed");
        leftMap.add("outfit", "garb");
        leftMap.add("guide", "usher");

        rightMap = new HashTable(5000);
        rightMap.add("fond", "averse");
        rightMap.add("warth", "delight");
        rightMap.add("diligent", "idle");
        rightMap.add("guide", "follow");
        rightMap.add("flow", "jam");
    });

    it('Join the two hash maps', () => {
        let expectedResults = [
            ["warth", "anger", "delight"],
            ["diligent", "employed", "idle"],
            ["outfit", "garb", "null"],
            ["fond", "enamored", "averse"],
            ["guide", "usher", "follow"],
        ];
        let hashTable = new HashTable(5000);
        expect(hashTable.leftJoin(leftMap, rightMap)).toEqual(expectedResults);
    });
});