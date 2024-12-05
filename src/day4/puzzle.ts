import fs from "fs";

export function findXmasCount(input: string): number {
    const grid = input.split('\n').filter(line => line.length > 0);
    const rows = grid.length;
    const cols = grid[0].length;
    const xmas = 'XMAS';
    let count = 0;

    const directions = [
        [0, 1], [1, 0], [1, 1], [1, -1], // right, down, down-right, down-left
        [0, -1], [-1, 0], [-1, -1], [-1, 1] // left, up, up-left, up-right
    ];

    const isValid = (x: number, y: number) => x >= 0 && x < rows && y >= 0 && y < cols;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            for (const [dRow, dCol] of directions) {
                let found = false;
                for (let i = 0; i < xmas.length; i++) {
                    const searchRow = row + dRow * i;
                    const searchCol = col + dCol * i;
                    if (!isValid(searchRow, searchCol) || grid[searchRow][searchCol] !== xmas[i]) {
                        found = false;
                        break;
                    }
                    found = true;
                }
                if (found) count++;
            }
        }
    }

    return count;
}

export function findMasInXCount(input: string): number {
    const grid = input.split('\n').filter(line => line.length > 0);
    const rows = grid.length;
    const cols = grid[0].length;
    let count = 0;

    const isValid = (x: number, y: number) => x >= 0 && x < rows && y >= 0 && y < cols;

    function topLeftToBottomRightIsInBounds(r: number, c: number) {
        return isValid(r - 1, c - 1) && isValid(r + 1, c + 1);
    }

    function topRightToBottomLeftIsInBounds(r: number, c: number) {
        return isValid(r - 1, c + 1) && isValid(r + 1, c - 1)
    }

    for (let r = 1; r < rows - 1; r++) {
        for (let c = 1; c < cols - 1; c++) {
            if (grid[r][c] === 'A') {
                let validTopLeftToBottomRightSegment = false;
                let validTopRightToBottomLeftSegment = false;

                if (topLeftToBottomRightIsInBounds(r, c)) {
                    let foundMas = false;
                    let foundSam = false;
                    if (grid[r - 1][c - 1] === 'M' && grid[r + 1][c + 1] === 'S') {
                        foundMas = true;
                    } else if (grid[r - 1][c - 1] === 'S' && grid[r + 1][c + 1] === 'M') {
                        foundSam = true;
                    }
                    if (foundMas || foundSam) validTopLeftToBottomRightSegment = true;
                }
                if (topRightToBottomLeftIsInBounds(r, c)) {
                    let foundMas = false;
                    let foundSam = false;
                    if (grid[r - 1][c + 1] === 'M' && grid[r + 1][c - 1] === 'S') {
                        foundMas = true;
                    } else if (grid[r - 1][c + 1] === 'S' && grid[r + 1][c - 1] === 'M') {
                        foundSam = true;
                    }
                    if (foundMas || foundSam) validTopRightToBottomLeftSegment = true;
                }
                if (validTopLeftToBottomRightSegment && validTopRightToBottomLeftSegment) count++;
            }
        }
    }

    return count;
}

function part1() {
    const input = fs.readFileSync('src/day4/input.txt', 'utf8');
    const count = findXmasCount(input);
    console.log(count);
}

function part2() {
    const input = fs.readFileSync('src/day4/input.txt', 'utf8');
    const count = findMasInXCount(input);
    console.log(count);
}

part1();
part2();
