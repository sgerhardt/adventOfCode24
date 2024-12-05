import {describe, it} from "node:test";
import {strict as assert} from "assert";
import {findMasInXCount, findXmasCount} from "../day4/puzzle";

describe('Part 1', () => {
    it('find xmas count', () => {
        let input =
            'XMASMAS\n' +
            'MMMSAMX\n' +
            'AMAMMMM\n' +
            'SMMSMMM\n';
        assert.equal(findXmasCount(input), 4);
    });
});

describe('Part 2', () => {
    it('find mas count in shape of x', () => {
        let input =
            'M.S\n' +
            '.A.\n' +
            'M.S\n';
        assert.equal(findMasInXCount(input), 1);
    });

    it('find both backwards', () => {
        let input =
            'S.S\n' +
            '.A.\n' +
            'M.M\n';
        assert.equal(findMasInXCount(input), 1);
    });

    it('find multiple', () => {
        let input =
            '.M.S......\n' +
            '..A..M.M..\n' +
            '.M.S..A...\n' +
            '..A.AS.SM.\n';
        assert.equal(findMasInXCount(input), 2);
    });

    it('find multiple', () => {
        let input =
            '.M.S......\n' +
            '..A..M.M..\n' +
            '.M.S..A...\n' +
            '..A.AS.SM.\n';
        assert.equal(findMasInXCount(input), 2);
    });

    it('find multiple', () => {
        let input =
            'S.S.S.S.S.\n' +
            '.A.A.A.A..\n' +
            'M.M.M.M.M.\n' +
            '..A.AS.SM.\n';
        assert.equal(findMasInXCount(input), 4);
    });
    it('find multiple tight group', () => {
        let input =
            'MSMS.\n' +
            'MAA..\n' +
            'SMSM.';
        assert.equal(findMasInXCount(input), 2);
    });

    it('find all from sample', () => {
        let input =
            '.M.S......\n' +
            '..A..MSMS.\n' +
            '.M.S.MAA..\n' +
            '..A.ASMSM.\n' +
            '.M.S.M....\n' +
            `..........\n` +
            'S.S.S.S.S.\n' +
            '.A.A.A.A..\n' +
            'M.M.M.M.M.\n' +
            '..........\n';
        assert.equal(findMasInXCount(input), 9);
    });
});