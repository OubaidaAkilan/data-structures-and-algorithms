'use strict';

const Stack = require('./Stack');
class Queue {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
        this.pointer = this.stack1.top;
        this.count = 0;
    }

    enqueue(value) {
        this.count++;
        this.stack1.push(value);
        let currentStack1 = this.stack1.top;
        if (!currentStack1.next) {
            this.pointer = this.stack1.top;
            // console.log('this.pointer for enqueue', this.pointer);
        } else {
            while (currentStack1) {
                this.pointer = currentStack1;
                currentStack1 = currentStack1.next;

                if (!currentStack1) {
                    break;
                }
            }
            // console.log('this.pointer for enqueue', this.pointer);

        }
        return this.pointer.value;//front inside queue 
    }

    dequeue() {
        if (!this.count) {
            
            return 0;
        } else {
            this.count--;
            let currerntStack = this.stack1.top;
            console.log('currerntStack = this.stack1.top' ,currerntStack);
            let value = 0;
            let res = 0;
            while (currerntStack) {
                value = this.stack1.pop();
                console.log('After pop this.stack1.top ',  this.stack1.top);
                console.log('value', value);
                if (!currerntStack) {
                    this.stack2.push(value);
                    break;

                }
                currerntStack = currerntStack.next;
                
                if (!value) {
                    break;
                }
                this.stack2.push(value);

            }

            let currerntStack2 = this.stack2.top;
            console.log('stack2', currerntStack2);
            res = this.stack2.pop();
            console.log('After pop stack2' ,this.stack2.top );//Node { value: 2, next: null }
            console.log('res =', res);


            currerntStack2 = this.stack2.top;
            // console.log('after pop',currerntStack2); // Node { value: 2, next: null }

            while (currerntStack2) {
                // console.log('currerntStack2.next',currerntStack2.next);//null
                value = this.stack2.pop();
                console.log(' value = this.stack2.pop();' ,value);
                this.stack1.push(value);
                console.log('stack 111111111' ,this.stack1.top )//Node { value: 2, next: null }
                let cs1 =this.stack1.top;
                while (cs1) {
                    this.pointer =cs1;
                    cs1 =cs1.next;
                    if (!cs1) {
                        break;
                    }
                }
                console.log('stack 222222222' ,this.stack2.top )//null
                currerntStack2 = currerntStack2.next;
                // console.log('currerntStack2' ,currerntStack2 ) //null
                if (!value) {
                    break;
                }
            }
            if (!this.count) {
                this.pointer =null;
            }
    

            return res;
        }
       

    }


    peek() {
        
        if (!this.pointer) {
            return 0;
        } else {
            return this.pointer.value;
        }
    }

    isEmpty() {
        if (!this.pointer) {
            return true;
        } else {
            return false;
        }
    }



}

module.exports = Queue;