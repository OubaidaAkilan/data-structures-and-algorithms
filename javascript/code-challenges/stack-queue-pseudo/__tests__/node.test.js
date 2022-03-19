'use strict';


const Node =require('../Node');



describe('test Node instance',()=>{

    it('test node' ,()=>{
        const value = 'anything';
    const node = new Node(value);
    expect(node).toBeInstanceOf(Node);
    expect(node.value).toEqual(value);
    expect(node.next).toBeNull();
  
    });

  

});