'use strict';

class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }

    findMax() {
        
        let max = 0;
        let travers = (node) => {
            if (node.left) {
                if (node.value > max) max = node.value;
                travers(node.left);
            } else {
                if (node.value > max) max = node.value;
            }
            if (node.right) {
                if (node.value > max) max = node.value;
                travers(node.right);
            } else {
                if (node.value > max) max = node.value;
            }
        }
        
        if (this.root) {
            travers(this.root);
            return max;
        } else {
            console.log('the tree is empty');
        }

    }



}

module.exports = BinaryTree;