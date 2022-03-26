'use strict';


const { it } = require('eslint/lib/rule-tester/rule-tester');
const validateBrackets =require('../validate-brackets');



describe('test validate brackets function ' ,()=>{
 
    it('test true expr' ,()=>{
        let expr = "([{}])";

        expect(validateBrackets(expr)).toEqual(true);
    
    })

    it('test false expr' ,()=>{
        let expr = "([{})";

        expect(validateBrackets(expr)).toEqual(false);
    
    })

});