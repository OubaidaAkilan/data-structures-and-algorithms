'use strict';
const Node =require('./Node')
class BinaryTree {
    constructor(root = null) {
        this.root = root
    }


}
// let tree =new BinaryTree;
// console.log(typeof tree);
// let one = new Node(1);
//         let two = new Node(2);
//         let three = new Node(3);
//         let four = new Node(4);
//         let five = new Node(5);
//         let six = new Node(6);
//         let seven = new Node(7);
//         let eight = new Node(8);
//         let nine = new Node(9);

//         // this based on our example that we mentioned in the class
//         // see attached image (tree-example.png)
//         one.left = two;
//         one.right = three;
//         two.left = six;
//         six.right = seven;
//         seven.left = eight;
//         seven.right = nine;
//         three.left = four;
//         three.right = five;

//         // create a tree and pass root to it
//       let  tree = new BinaryTree(one);

function breadthFirst(tree) {

    let queue = [];
    let res = [];
    if (tree.root) {

        let currentNode = tree.root;
        let shiftNode;
        queue.push(currentNode);
        shiftNode = queue.shift();
        while (shiftNode) {
            res.push(shiftNode.value);
            if (shiftNode.left) queue.push(shiftNode.left);
            if (shiftNode.right) queue.push(shiftNode.right);
            shiftNode = queue.shift();
        }
    } else {
        console.log(' you should pass a tree object and the root of the tree shouldn\'t be null');
    }
return res;
}



// console.log(breadthFirst(tree));

module.exports ={
    BinaryTree :BinaryTree,
    breadthFirst :breadthFirst
}