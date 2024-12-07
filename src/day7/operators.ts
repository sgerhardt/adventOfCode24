import fs from "fs";

export function sumTrueEquations(equations: string): number {
    let sum = 0;
    const eqs = equations.split('\n');

    for (const equation of eqs) {
        const [left, right] = equation.split(': ');
        const operands = right.split(' ').map(Number);
        const target = Number(left);

        if (search(1, operands[0])) {
            sum += target;
        }

        // try all combinations of + and * operations
        function search(index: number, current: number): boolean {
            if (index === operands.length) {
                return current === target;
            }
            if (search(index + 1, current + operands[index])) {
                return true;
            }
            return search(index + 1, current * operands[index]);
        }
    }
    return sum;
}


function part1() {
    const input = fs.readFileSync('src/day7/input.txt', 'utf-8');
    console.log(sumTrueEquations(input));
}

part1();