import { strict as assert } from 'assert';
import {calc} from "./locations";
import {describe, it} from "node:test";

describe('Part 1', () => {
    it('Subtract and sum lists', () => {
        let l1 = [1, 2];
        let l2 = [3, 4];
        const res = calc(l1, l2);
        assert.equal(res, 4);
    });
});