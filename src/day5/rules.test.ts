import {describe, it} from "node:test";
import {strict as assert} from "assert";
import {isOrderingCorrect, loadRulesForNumbers} from "./rules";


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