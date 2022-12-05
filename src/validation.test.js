import { it, expect, describe } from 'vitest';

import { validateStringNotEmpty, validateNumber } from './util/validation';

describe('validateStringNotEmpty()', () => {

    it('should throw an error if input is empty', () => {
      const input = '';
      const result = () => validateStringNotEmpty(input);
      expect(result).toThrow();
    });

    it('should throw an error if any other value than string is provided', () => {
        const input1 = 1;
        const input2 = true; // boolean
        const input3 = {};
        const input4 = NaN;
        const result1 = () => validateStringNotEmpty(input1);
        const result2 = () => validateStringNotEmpty(input2);
        const result3 = () => validateStringNotEmpty(input3);
        const result4 = () => validateStringNotEmpty(input4);
        expect(result1).toThrow();
        expect(result2).toThrow();
        expect(result3).toThrow();
        expect(result4).toThrow();
    })

    it('should throw an error if input is only whitespace', () => {
        const input = ' ';
        const result = () => validateStringNotEmpty(input);
        expect(result).toThrow();
    });

    it('should not throw an error if input is not empty', () => {
        const input = 'a';
        const result = () => validateStringNotEmpty(input);
        expect(result).not.toThrow();
    });
});


describe('validateNumber()', () => {
    it('should throw an error if non-numeric value is provided with a reason (invalid number)', () => {
        const input = 'a';
        const input2 = '2';
        const input3 = NaN;
        const result = () => validateNumber(input);
        const result2 = () => validateNumber(input2);
        const result3 = () => validateNumber(input3);

        expect(result).toThrow('Invalid number input.');
        expect(result2).toThrow();
        expect(result3).toThrow('Invalid number input.');        
    });

    it('should not throw an error if numeric value is provided', () => {
        const input = 1;
        const result = () => validateNumber(input);
        expect(result).not.toThrow();
    });
});