'use strict';

const Node = require('./Node');

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(value) {
        const node = new Node(value);
        if (!this.head) {//linked list is empty
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    }


    toStringValue(){
        let res ="";
        if(!this.head){
           return res ="Linked list is empty"; 
        }else{
            let currentNode = this.head;
            while(currentNode){
                res = res + `{${currentNode.value}} -> `;
                currentNode =currentNode.next;
                console.log(currentNode);
                if (currentNode === null) {
                    return res += `NULL`;
                }else if(currentNode.next === null){
                    res =res+`{${currentNode.value}} -> `+`NULL`;
                    return res;
                }
            }
        }

    }


}


// let ll1 = new LinkedList();
// ll1.insert(1);
// ll1.insert(2);



// let ll2 = new LinkedList();
// ll2.insert(5);
// ll2.insert(2);
// ll2.insert(3);
// ll2.insert(4);

//console.log(ll1.head);


function linkedListZip(ll1, ll2) {
    let ll3=new LinkedList();
    let currentNode = ll1.head;
    let currerntNode2 = ll2.head;
    while (currentNode || currerntNode2) {

        if (currentNode) {
            console.log(currentNode.value);
            ll3.insert(currentNode.value);
            currentNode =currentNode.next;
        }
        if (currerntNode2) {
            console.log(currerntNode2.value);
            ll3.insert(currerntNode2.value);
            currerntNode2 =currerntNode2.next;
        }


    }


    return ll3;
}



// console.log(linkedListZip(ll1,ll2));

module.exports = {
    LinkedList: LinkedList,
    linkedListZip: linkedListZip
};





// function linkedListZip(ll1, ll2) {

//     let currentNode = ll1.head;
//     let currerntNode2 = ll2.head;
//     let res = "";
//     while (currentNode && currerntNode2) {
//         // console.log(currentNode.value);
//         // console.log(currerntNode2.value);
//         res += `${currentNode.value} -> ${currerntNode2.value} -> `
//         currentNode = currentNode.next;
//         currerntNode2 = currerntNode2.next;
//         // console.log('currentNode',currentNode);
//         // console.log('currentNode2',currerntNode2);

//     }
//     if (!currentNode) {
//         while (currerntNode2) {
//             res += `${currerntNode2.value} -> `
//             currerntNode2 = currerntNode2.next;
//             if (!currerntNode2) {
//                 res += `Null`;
//             }
//         }
//     } else {
//         while (currentNode) {
//             res += `${currentNode.value} -> `
//             currentNode = currentNode.next;
//             if (!currentNode) {
//                 res += `Null`;
//             }
//         }
//     }


//     return res;
// }