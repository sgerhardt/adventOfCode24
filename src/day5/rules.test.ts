import {describe, it} from "node:test";
import {strict as assert} from "assert";
import {isOrderingCorrect, loadRulesForNumbers, order} from "./rules";


describe('Part 1', () => {
    loadRulesForNumbers('src/day5/test_data.txt');
    it('update passes rules', () => {
        const update = [75, 47, 61, 53, 29];
        assert.equal(isOrderingCorrect(update), true);
    });

    it('update fails rules', () => {
        const update = [47, 75, 61, 53, 29];
        assert.equal(isOrderingCorrect(update), false);
    });
});

describe('Part 2', () => {
    loadRulesForNumbers('src/day5/test_data.txt');
    it('orders incorrect update', () => {
        const update = [75, 97, 47, 61, 53];
        // assert the two arrays are equal

        assert.deepEqual(order(update), [97, 75, 47, 61, 53]);
    });
})