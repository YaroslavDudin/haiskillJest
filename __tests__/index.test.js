import * as funcs from '../index.js';
import { describe, expect, it } from '@jest/globals';

describe("task1", () => {
    it('should work fine', () => {
        expect(funcs.square(2)).toBe(4);
    });
});

describe("task2", () => {
    it('should capitalize the string', () => {
        expect(funcs.capitalize('hello')).toBe('Hello');
    });
});
