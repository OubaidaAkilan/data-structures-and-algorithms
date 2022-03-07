'use strict';


const Node =require('../Node');



describe('test node class', ()=>{


    it('test creating a  node instance with next and value' ,()=>{
        const value ='anything';
        const node = new Node(value);
        expect(node).toBeInstanceOf(Node);
        expect(node.value).toEqual(value);
        expect(node.next).toBeNull();

    })

});

