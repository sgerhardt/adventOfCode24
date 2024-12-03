import {describe, it} from "node:test";
import {strict as assert} from "assert";
import {mul, mul2, parse} from "../day3/mul";

describe('Part 1', () => {
    it('mul(44,46) gives 2024', () => {
        let input = 'mul(44,46)';
        assert.equal(mul(input), 2024);
    });
    it('mul(1,2) and mul(44,46)', () => {
        let input = 'mul(1,2) and mul(44,46)';
        assert.equal(mul(input), 2026);
    });
});

describe('Part 2', () => {
    it(`xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5)) is sum of mul(2,4) mul(8,5)`, () => {
        let input = 'xmul(2,4)&mul[3,7]!^don\'t()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))';
        const parsedResult = parse(input)
        assert.equal(mul2(parsedResult), 48);
    });
});