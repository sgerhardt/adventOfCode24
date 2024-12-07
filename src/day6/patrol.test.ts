import {describe, it} from "node:test";
import {countUniqueGridPositions, countUniqueLoopingObstacles} from "./patrol";
import {strict as assert} from "assert";

describe('Part 1', () => {
    const input =
        '....#.....\n' +
        '.........#\n' +
        '..........\n' +
        '..#.......\n' +
        '.......#..\n' +
        '..........\n' +
        '.#..^.....\n' +
        '........#.\n' +
        '#.........\n' +
        '......#...'
    it('count unique visited positions', () => {
        const grid = input.split('\n');
        assert.equal(countUniqueGridPositions(grid, 6, 4, -1, 0), 41);
    });
});

describe('Part 2', () => {
    // Option one, put obstacle next to the guard's starting position:
    //
    // ....#.....
    // ....+---+#
    // ....|...|.
    // ..#.|...|.
    // ....|..#|.
    // ....|...|.
    // .#.O^---+.
    // ........#.
    // #.........
    // ......#...
    // Option two, put obstacle in the bottom right quadrant of the mapped area:
    //
    //
    // ....#.....
    // ....+---+#
    // ....|...|.
    // ..#.|...|.
    // ..+-+-+#|.
    // ..|.|.|.|.
    // .#+-^-+-+.
    // ......O.#.
    // #.........
    // ......#...
    // Option three, put obstacle next to the # in the bottom right quadrant:
    //
    // ....#.....
    // ....+---+#
    // ....|...|.
    // ..#.|...|.
    // ..+-+-+#|.
    // ..|.|.|.|.
    // .#+-^-+-+.
    // .+----+O#.
    // #+----+...
    // ......#...
    // Option four, put obstacle near the bottom left corner:
    //
    // ....#.....
    // ....+---+#
    // ....|...|.
    // ..#.|...|.
    // ..+-+-+#|.
    // ..|.|.|.|.
    // .#+-^-+-+.
    // ..|...|.#.
    // #O+---+...
    // ......#...
    // Option five, put obstacle a bit to the right instead:
    //
    // ....#.....
    // ....+---+#
    // ....|...|.
    // ..#.|...|.
    // ..+-+-+#|.
    // ..|.|.|.|.
    // .#+-^-+-+.
    // ....|.|.#.
    // #..O+-+...
    // ......#...
    // Option six, put obstacle right next to the tank of universal solvent:
    //
    // ....#.....
    // ....+---+#
    // ....|...|.
    // ..#.|...|.
    // ..+-+-+#|.
    // ..|.|.|.|.
    // .#+-^-+-+.
    // .+----++#.
    // #+----++..
    // ......#O..
    it("find the number of unique obstacles we can add that result in guard going in infinite loop", () => {
        const input =
            '....#.....\n' +
            '.........#\n' +
            '..........\n' +
            '..#.......\n' +
            '.......#..\n' +
            '..........\n' +
            '.#..^.....\n' +
            '........#.\n' +
            '#.........\n' +
            '......#...';
        const grid = input.split('\n');
        assert.equal(countUniqueLoopingObstacles(grid, 6, 4, -1, 0), 6);
    });
});