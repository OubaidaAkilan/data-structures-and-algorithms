'use strict';

const Node =require('./Node');


class LL{
    constructor(){
        this.head =null;
    }

    insert(value){
        const node =new Node(value);
        if (!this.head) {
             this.head =node;
        }else{
            node.next =this.head;
            this.head =node;
        }
       
    }
}



module.exports = {
    LL :LL,
    Node:Node
};