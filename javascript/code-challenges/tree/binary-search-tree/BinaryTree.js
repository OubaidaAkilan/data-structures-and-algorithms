'use strict';

class BinaryTree{
    constructor(root=null){
        this.root =root;
    }

    preOrder(){
        // root left right
        let res=[];
        let travers=(node)=>{
            res.push(node.value);
            if(node.left) travers(node.left);
            if(node.right) travers(node.right);
        }
        travers(this.root);
        return res;
    }

    inOrder(){
        // left root right
        let res=[];
        let travers=(node)=>{
            if(node.left) travers(node.left);
            res.push(node.value);
            if(node.right) travers(node.right);
        }
        travers(this.root);
        return res;
    }

    postOrder(){
        // left right root
        let res=[];
        let travers=(node)=>{
            if(node.left) travers(node.left);
            if(node.right) travers(node.right);
            res.push(node.value);
        }
        travers(this.root);
        return res;
    }



}

module.exports =BinaryTree;