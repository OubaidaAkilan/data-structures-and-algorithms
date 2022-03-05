'use strict';


const Node = require('./Node');



class LinkedList {
    constructor() {
        this.head = null;
    }

    insertNode(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }

    }

    nodeIsExist(value) {
        const node = new Node(value);
        if (!this.head) {
            return false;
        } else {
            let currentNode = this.head;
            while (currentNode.next) {
                // console.log("currentNode.next" ,currentNode.next);
                //  console.log(currentNode.value);
                if (currentNode.value === value) {
                    return true;
                } else {
                    // console.log("afbeforeter", currentNode.value);
                    currentNode = currentNode.next;
                    if (currentNode.next === null) {
                        // console.log("condetion");
                        return currentNode.value === value;
                    }
                }

            }
        }

    };

    toStringValue(){
        let res ="";
        if(!this.head){
           return res ="Linked list is empty"; 
        }else{
            let currentNode = this.head;
            while(currentNode.next){
                res = res + `{${currentNode.value}} -> `;
                currentNode =currentNode.next;
                if(currentNode.next === null){
                    res =res+`{${currentNode.value}} -> `+`NULL`;
                    return res;
                }
            }
        }

    };
}


module.exports = LinkedList;
