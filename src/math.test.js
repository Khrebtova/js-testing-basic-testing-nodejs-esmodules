import { test, expect } from 'vitest';
//or add  in package json "test": "vitest --run --reporter verbose --global",
//or use import { it } from 'vitest' - they are  the same
import {add} from './math';
//it('should summarize all the number values in an array', () => {})

test('should summarize all the number values in an array', () => {
    // Arrange phase
    const numbers = [1, 2, 3]
    
    // Act phase
    const result = add(numbers);
    
    // Assert phase
    const expectedResult = numbers.reduce((a, b) => a + b, 0)
    expect(result).toBe(expectedResult)
});

test('should yield NaN if a least one invalid number is provided', () => {
    //Arrange
    const inputs = ['invalid', 1]

    // Act 
    const result = add(inputs);

    // Assert 
    expect(result).toBeNaN();
})

test('should yield correct sum if an array of numeric string is provided', () => {
    // Arrange phase
    const numbers = ['1', '2', '3']
    
    // Act phase
    const result = add(numbers);
    
    // Assert phase
    const expectedResult = numbers.reduce((a, b) => +a + +b, 0)
    expect(result).toBe(expectedResult)
})


test("should yield 0 if an emty array is provided", ()=>{
    // Arrange phase
    const numbers = []
    
    // Act phase
    const result = add(numbers);
    
    // Assert phase    
    expect(result).toBe(0)
})

// -----error catching
test("should throw an error if no value is passed into the function", ()=>{
    // try{
    //     const result = add();
    // }catch(error){        
    //     expect(error).toBeDefined()
    // }
    // or: 
    const resultFun = () => {
        add();
    }
    expect(resultFun).toThrow(/is not iterable/)
})

test("should throw an error contained message `is not iterable` if provided with multiple arguments instead of an array", ()=>{
    const num1 = 1;
    const num2 = 2;

    const resultFun =() => {
        add(num1, num2)
    }
    expect(resultFun).toThrow(/is not iterable/)
})