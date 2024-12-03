// 7 6 4 2 1
// 1 2 7 8 9
// 9 7 6 2 1
// 1 3 2 4 5
// 8 6 4 4 1
// 1 3 6 7 9

import {describe, it} from "node:test";
import {isSafe, isSafeWithOneRemoval} from "./levels.js";
import {strict as assert} from "assert";

describe('Part 1', () => {
    it('all increasing values is safe', () => {
        let levels = [1, 2, 3, 4, 5];
        assert.equal(isSafe(levels), true);
    });
    it('all increasing values but diff is greater than 3 is unsafe', () => {
        let levels = [1, 2, 3, 4, 10];
        assert.equal(isSafe(levels), false);
    });
    it('not all values increasing is unsafe', () => {
        let levels = [1, 2, 1, 4, 5];
        assert.equal(isSafe(levels), false);
    });
    it('all decreasing values is safe', () => {
        let levels = [7, 6, 4, 2, 1];
        assert.equal(isSafe(levels), true);
    });
    it('all decreasing values but greater diff than 3 is unsafe', () => {
        let levels = [9, 5, 4, 2, 1];
        assert.equal(isSafe(levels), false);
    });

    it('same values unsafe with init decrease', () => {
        let levels = [6, 5, 4, 2, 2];
        assert.equal(isSafe(levels), false);
    });

    it('same values unsafe with init increase', () => {
        let levels = [1, 3, 4, 4, 6];
        assert.equal(isSafe(levels), false);
    });
});

describe('Part 2', () => {
    it('all increasing values is safe', () => {
        let levels = [1, 2, 3, 4, 5];
        assert.equal(isSafeWithOneRemoval(levels), true);
    });
    it('all increasing values but diff is greater than 3 is safe after removing 10', () => {
        let levels = [1, 2, 3, 4, 10];
        assert.equal(isSafeWithOneRemoval(levels), true);
    });
    it('is safe after removing value 1 at the third index', () => {
        let levels = [1, 2, 1, 4, 5];
        assert.equal(isSafeWithOneRemoval(levels), true);
    });
    it('all decreasing values is safe', () => {
        let levels = [7, 6, 4, 2, 1];
        assert.equal(isSafeWithOneRemoval(levels), true);
    });
    it('all decreasing values but greater diff than 3 is safe after removing 9', () => {
        let levels = [9, 5, 4, 2, 1];
        assert.equal(isSafeWithOneRemoval(levels), true);
    });

    it('values safe with init decrease and after removing a 2', () => {
        let levels = [6, 5, 4, 2, 2];
        assert.equal(isSafeWithOneRemoval(levels), true);
    });

    it('safe after removing a 4 with init increase', () => {
        let levels = [1, 3, 4, 4, 6];
        assert.equal(isSafeWithOneRemoval(levels), true);
    });

    it('safe by removing second level', () => {
        let levels = [1, 3, 2, 4, 5];
        assert.equal(isSafeWithOneRemoval(levels), true);
    });

    it('safe by removing the third level 4', () => {
        let levels = [8, 6, 4, 4, 1];
        assert.equal(isSafeWithOneRemoval(levels), true);
    });
});