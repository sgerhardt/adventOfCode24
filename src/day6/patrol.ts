import {readFileSync} from "fs";

export function countUniqueGridPositions(grid: string[], startingRow: number, startingCol: number, nextRow: number, nextCol: number): number {
    let visited = new Set<string>();
    visited.add(`${startingRow},${startingCol}`);
    let row = startingRow;
    let col = startingCol;
    let dRow = nextRow;
    let dCol = nextCol;
    while (row >= 0 && row < grid.length && col >= 0 && col < grid[0].length) {
        if (grid[row][col] === '.') {
            visited.add(`${row},${col}`);
            // console.log(`visited: ${row},${col}`);
        }
        if (row + dRow < 0 || row + dRow >= grid.length || col + dCol < 0 || col + dCol >= grid[0].length) {
            // out of bounds
            return visited.size;
        }
        // if next position is an obstacle, rotate 90 degrees. If we are out of bounds,
        // we are done and should break out of the loop
        if (grid[row + dRow][col + dCol] === '#') {
            let temp = dRow;
            dRow = dCol;
            dCol = -temp;
        }
        row += dRow;
        col += dCol;
    }
    return visited.size;
}

export function countUniqueLoopingObstacles(
    grid: string[],
    startingRow: number,
    startingCol: number,
    nextRow: number,
    nextCol: number
): number {
    const rows = grid.length;
    const cols = grid[0].length;
    let count = 0;

    const mutableGrid = grid.map(line => line.split(''));

    function causesInfiniteLoop(): boolean {
        let row = startingRow;
        let col = startingCol;
        let dRow = nextRow;
        let dCol = nextCol;

        const visitedStates = new Set<string>();
        while (true) {
            const stateKey = `${row},${col},${dRow},${dCol}`;
            if (visitedStates.has(stateKey)) {
                // been here before with the same direction => loop
                return true;
            }
            visitedStates.add(stateKey);

            const nextR = row + dRow;
            const nextC = col + dCol;

            if (nextR < 0 || nextR >= rows || nextC < 0 || nextC >= cols) {
                return false;
            }

            if (mutableGrid[nextR][nextC] === '#') {
                const temp = dRow;
                dRow = dCol;
                dCol = -temp;
                continue;
            }

            row = nextR;
            col = nextC;
        }
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (mutableGrid[r][c] === '.') {
                mutableGrid[r][c] = '#';
                if (causesInfiniteLoop()) {
                    count++;
                }
                mutableGrid[r][c] = '.';
            }
        }
    }

    return count;
}


function part1() {
    const input = readFileSync('src/day6/input.txt', 'utf-8');
    const grid = input.split('\n');
    // find the carret position
    let row = 0;
    let col = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '^') {
                row = i;
                col = j;
                break;
            }
        }
    }
    console.log(countUniqueGridPositions(grid, row, col, -1, 0));
}


function part2() {
    const input = readFileSync('src/day6/input.txt', 'utf-8');
    const grid = input.split('\n');
    // find the carret position
    let row = 0;
    let col = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '^') {
                row = i;
                col = j;
                break;
            }
        }
    }
    console.log(countUniqueLoopingObstacles(grid, row, col, -1, 0));
}

part1();
part2();