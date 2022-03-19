'use strict';

const Queue =require('../Queue.js');




describe('testing the Queue', () => {
    it('test creaing a Queue',()=>{
        let newQueue = new Queue();
        expect(newQueue instanceof Queue).toBeTruthy();
        expect(newQueue.peek()).toBe(0);
    });

    it('testing enqueue to the Queue',()=>{
        let newQueue = new Queue();
        newQueue.enqueue(1);
        expect(newQueue.enqueue(1)).toEqual(1)
        // newQueue.enqueue(2);
        expect(newQueue.enqueue(2)).toEqual(1)
        expect(newQueue.isEmpty()).toEqual(false);
    });

    it('testing dequeue from the Queue',()=>{
        let newQueue = new Queue();
        newQueue.enqueue(1);
        expect(newQueue.dequeue()).toEqual(1);
        expect(newQueue.isEmpty()).toEqual(true);

    });

    it('testing peek from the Queue',()=>{
        let newQueue = new Queue();
        newQueue.enqueue(1);
        newQueue.enqueue(2);
        // newQueue.enqueue(3);
        // expect(newQueue.peek()).toEqual(1);
        // expect(newQueue.peek()).toEqual(2);
        expect(newQueue.peek()).toEqual(1);
    });

    it('Calling dequeue or peek on empty Queue raises exception',()=>{
        let newQueue = new Queue();
        // newQueue.enqueue(1);
        // newQueue.enqueue(2);
        // newQueue.dequeue();
        // newQueue.dequeue();
        // newQueue.enqueue(3);
        // expect(newQueue.peek()).toEqual(1);
        expect(newQueue.dequeue()).toEqual(0);
        expect(newQueue.peek()).toEqual(0);
    });






});


