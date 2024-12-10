import {describe, it} from "node:test";
import {strict as assert} from "assert";
import {blockFormat} from "./diskmap";

describe('Part 1', () => {
    const input= "12345";
    it('converts to 0..111....22222 disk format', () => {
        // 1 used block followed by 2 open blocks (represented by .)
        // 0..
        // 111.... used blocks followed by 4 open blocks
        // 22222 used blocks
        assert.equal(blockFormat(input), "0..111....22222");
    });
});