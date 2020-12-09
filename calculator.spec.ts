import {Calculator} from './calculator';

describe('Calculator', () => {
    describe('add', () => {
        describe.each([
            [1, 2, 3],
            [0, 1, 1],
            [1, 0, 1],
        ])('a %o, b %o, expected %o', (a: number, b: number, expected: number) => {
            it('should return a + b', () => {
                expect(Calculator.add(a, b)).toEqual(expected);
            });
        });
    });

    describe('sub', () => {
        describe.each([
            [1, 2, -1],
            [3, 2, 1],
            [0, 1, -1],
            [1, 0, 1],
        ])('a %o, b %o, expected %o', (a: number, b: number, expected: number) => {
            it('should return a + b', () => {
                expect(Calculator.sub(a, b)).toEqual(expected);
            });
        });
    });

    describe('sub', () => {
        describe.each([
            [2, 2, 4],
            [1, 2, 2],
            [0, 1, 0],
            [1, 0, 0],
        ])('a %o, b %o, expected %o', (a: number, b: number, expected: number) => {
            it('should return a + b', () => {
                expect(Calculator.mul(a, b)).toEqual(expected);
            });
        });
    });

    describe('sub', () => {
        describe.each([
            [2, 2, 1],
            [3, 2, 1.5],
            [0, 1, 0],
        ])('a %o, b %o, expected %o', (a: number, b: number, expected: number) => {
            it('should return a + b', () => {
                expect(Calculator.div(a, b)).toEqual(expected);
            });
        });

        it('should return null if denominator is zero', () => {
            expect(Calculator.div(1, 0)).toBeNull();
        });
    });
});
