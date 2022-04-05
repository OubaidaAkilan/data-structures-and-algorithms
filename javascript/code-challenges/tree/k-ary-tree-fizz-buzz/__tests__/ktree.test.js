'use strict';

const {KTree} =require('../KTree');
const {fizzBuzzTree} =require('../KTree');
const Node = require('../Node');
let tree = null;




describe('test k-ary-tree and fizzBuzzTree function' ,()=>{

    beforeAll(()=> {
let one = new Node(20);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);
let six = new Node(6);
let seven = new Node(7);
let eight = new Node(8);
let nine = new Node(9);
let ten = new Node(-15);
let eleven = new Node(20);
let twelve = new Node(15);

one.children =[two,three,four];
two.children =[five,six];
three.children =[seven,ten,eleven ,twelve];
four.children =[eight,nine];
        // create a tree and pass root to it
        tree = new KTree(one);
    });

    it('test instance of class KTree',()=>{
         
        expect(tree.root.value).toEqual(20);
    });


    it('fizzBuzzTree fuction', ()=> {
        fizzBuzzTree(tree);  
        expect(tree.root.value).toEqual('buzz');
        expect(tree.root.children[0].value).toEqual('2');
        expect(tree.root.children[1].value).toEqual('fizz');
        expect(tree.root.children[1].children[3].value).toEqual('fizzBuzz');
       
    });
});