'use strict';
const Node =require('./Node');


class KTree {
    constructor(root = null) {
       
        this.root = root;
    }


}


// let one = new Node(20);
// let two = new Node(2);
// let three = new Node(3);
// let four = new Node(4);
// let five = new Node(5);
// let six = new Node(6);
// let seven = new Node(7);
// let eight = new Node(8);
// let nine = new Node(9);
// let ten = new Node(-15);
// let eleven = new Node(20);
// let twelve = new Node(15);

// one.children =[two,three,four];
// two.children =[five,six];
// three.children =[seven,ten,eleven ,twelve];
// four.children =[eight,nine];


// let tree =new KTree(one);



// console.log(fizzBuzzTree(tree));



// the remainder operator 
// operand 



function fizzBuzzTree(kTree) {
    console.log(kTree);
    let queue = [];
    let res = [];
    if (kTree.root) {
        let currentNode = kTree.root;
        let shiftNode;

        queue.push(currentNode);
        shiftNode = queue.shift();

        while (shiftNode) {
            if(shiftNode.value % 3 == 0 && shiftNode.value % 5 == 0) shiftNode.value ='fizzBuzz';
            if(shiftNode.value % 3 == 0) shiftNode.value ='fizz';
            if(shiftNode.value % 5 == 0) shiftNode.value ='buzz';
            if(shiftNode.value % 3 > 0 && shiftNode.value % 5 > 0) shiftNode.value =`${shiftNode.value}`;
            res.push(shiftNode);
            let i = 0;
            while (i < shiftNode.children.length) {
                
                queue.push(shiftNode.children[i]);
                
                i++;
            }

            shiftNode = queue.shift();
        }
    } else {
        console.log(' you should pass a tree object and the root of the tree shouldn\'t be null');
    }


    return kTree;
}




module.exports={
    KTree:KTree,
    fizzBuzzTree :fizzBuzzTree
}