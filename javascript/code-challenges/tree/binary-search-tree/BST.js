'use strict';

const BinaryTree = require('./BinaryTree');
const Node = require('./Node');



class BST extends BinaryTree {// Binary Search Tree
    constructor(root) {
        super(root);//this.root =root 
    }


    add(value) {
        let newNode = new Node(value);
        let travers = (currentNode) => {
            if (newNode.value > currentNode.value) {
                if (currentNode.right) {
                    travers(currentNode.right);
                } else {
                    currentNode.right = newNode;
                }
            } if (newNode.value < currentNode.value) {
                if (currentNode.left) {
                    travers(currentNode.left)
                } else {
                    currentNode.left = newNode;
                }
            } if (newNode.value == currentNode.value) {
                console.log('value is exist');
            }
        }
        if (this.root) {
            travers(this.root);
        } else {
            this.root = newNode;
        }


    }

    contain(value) {
        let res = false;
        let travers = (currentNode) => {

            if (currentNode) {

                if (value > currentNode.value) travers(currentNode.right);
                if (value < currentNode.value) travers(currentNode.left);
                if (value == currentNode.value) res = true;
            } else {

                res = false;
            }



        }

        if (value) {
            travers(this.root);
            return res;
        } else {
            console.log('there is no arguments');
        }

    }

    findMax() {
        let res = 0;
        let travers = (currentNode) => {
            if (currentNode.right == null) {
                res = currentNode.value;
            } else {
                travers(currentNode.right);
            }
        }
        travers(this.root);
        return res;
    }

    findMin() {
        let res = 0;
        let travers = (currentNode) => {
            if (currentNode.left == null) {
                res = currentNode.value;
            } else {
                travers(currentNode.left);
            }
        }
        travers(this.root);
        return res;

    }


}



// let newBts = new BST();
// newBts.add(23);
// newBts.add(8);
// newBts.add(42);
// newBts.add(27);
// newBts.add(105);
// newBts.add(15);
// newBts.add(16);
// newBts.add(30);
// newBts.add(1);
// newBts.add(90);




// console.log(newBts.inOrder());
// newBts.contain();
// console.log(newBts.findMax());



module.exports =BST;