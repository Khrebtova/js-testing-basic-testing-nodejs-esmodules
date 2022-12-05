import { it, expect } from 'vitest';
import { transformToNumber } from './util/numbers';

it('should transform a string to a number', () => {
  const input = '1';
  const result = transformToNumber(input);  
  
  expect(result).toBeTypeOf('number');
});

it('should transform a string "1" to a number 1', () => {
    const input = '1';
    const result = transformToNumber(input);  
    
    expect(result).toBe(1);
  });


it('should yield NaN if input is non-transformable', () => {
    const input = 'a';
    const input2 = {};
    const result = transformToNumber(input);
    const result2 = transformToNumber(input2);

    expect(result).toBeNaN();
    expect(result2).toBeNaN();
});

// it('should throw an error if input contains letters', () => {
//     const input = 'a';
//     const result = () => transformToNumber(input);
//     expect(result).toThrow();
// });