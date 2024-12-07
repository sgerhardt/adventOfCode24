// 190: 10 19
// 3267: 81 40 27
// 83: 17 5
// 156: 15 6
// 7290: 6 8 6 15
// 161011: 16 10 13
// 192: 17 8 14
// 21037: 9 7 18 13
// 292: 11 6 16 20

import {describe, it} from "node:test";
import {strict as assert} from "assert";
import {sumTrueEquations} from "../day7/operators";

describe('Part 1', () => {
    const input = "190: 10 19\n3267: 81 40 27\n83: 17 5\n156: 15 6\n7290: 6 8 6 15\n161011: 16 10 13\n192: 17 8 14\n21037: 9 7 18 13\n292: 11 6 16 20";
    it('find the values that can be made true on the left by using either addition or multiplication on the right operands - sum the true', () => {
        assert.equal(sumTrueEquations(input), 3749);
    });
});