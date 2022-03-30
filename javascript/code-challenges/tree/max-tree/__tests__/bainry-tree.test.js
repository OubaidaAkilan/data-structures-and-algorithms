'use strict';

const BinaryTree = require('../BinaryTree');
const Node =require('../Node');
let tree=null;

beforeAll(()=>{
    let one = new Node(1);
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);
    let six = new Node(6);
    let seven = new Node(7);
    let eight = new Node(8);
    let nine = new Node(9);

     // this based on our example that we mentioned in the class
    // see attached image (tree-example.png)
    one.left = two;
    one.right = three;
    two.left = six;
    six.right = seven;
    seven.left = eight;
    seven.right = nine;
    three.left = four;
    three.right = five;

    // create a tree and pass root to it
     tree = new BinaryTree(one);

});

describe('Binary Tree',()=>{

    it('constructor' ,()=>{
        expect(tree.root.value).toEqual(1);
    });
    
    it('findMax method' ,()=>{
        
        // console.log(tree.preOrder());
        expect(tree.findMax()).toEqual(9);
    });






});