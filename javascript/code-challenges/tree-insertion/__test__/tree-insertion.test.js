'use strict'

const Hashmap = require('../TreeInsertion');
const Tree = require('../Tree');


describe('Binary Tree Intersection', () => {

    it('Tree Intersection', () => {
        const hashmap = new Hashmap(5000);
        const tree1 = new Tree();
        tree1.add(150);
        tree1.add(100);
        tree1.add(250);
        tree1.add(75);
        tree1.add(160);
        tree1.add(125);
        tree1.add(175);
        tree1.add(200);
        tree1.add(350);
        tree1.add(300);
        tree1.add(500);
        const tree2 = new Tree();
        tree2.add(42);
        tree2.add(100);
        tree2.add(600);
        tree2.add(15);
        tree2.add(160);
        tree2.add(200);
        tree2.add(350);
        tree2.add(125);
        tree2.add(175);
        tree2.add(4);
        tree2.add(500);
        let tree = hashmap.treeIntersection(tree1, tree2);
        expect(tree).toEqual([['100'],
        ['125'],
        ['160'],
        ['175'],
        ['200'],
        ['350'],
        ['500']]);

    })
    it('No Tree is Added', () => {
        const hashmap = new Hashmap(5000);
        const tree1 = new Tree();
        tree1.add(150);
        tree1.add(100);
        tree1.add(250);
        tree1.add(75);
        tree1.add(160);
        tree1.add(125);
        const tree2 = new Tree();
        let tree = hashmap.treeIntersection(tree1, tree2);
        expect(tree).toEqual('No Tree is Added');
    })


})