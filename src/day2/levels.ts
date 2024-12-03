import fs from "fs";

export function isSafe(levels :number[]): boolean {
    if(!levels.length){
        return false
    }

    // all increasing
    let prev = levels[0];
    for(let i = 1; i < levels.length; i++){
        if (i == levels.length-1 && prev < levels[i] && Math.abs(levels[i] - prev) <= 3) {
                return true;
        }
        if (Math.abs(levels[i] - prev) > 3){
            return false;
        }
        if (prev > levels[i]){
            break;
        }
        if(prev == levels[i]){
            return false;
        }
        prev = levels[i];
    }

    // all decreasing
    prev = levels[0];
    for(let i = 1; i < levels.length; i++){
        if (i == levels.length-1 && prev > levels[i] && Math.abs(levels[i] - prev) <= 3) {
            return true;
        }
        if (Math.abs(levels[i] - prev) > 3){
            return false;
        }
        if (prev < levels[i]){
            break;
        }
        if(prev == levels[i]){
            return false;
        }
        prev = levels[i];
    }
    return false
}

export function isSafeWithOneRemoval(levels: number[]): boolean {
    if (isSafe(levels)) {
        return true;
    }

    for (let i = 0; i < levels.length; i++) {
        let copy = levels.slice();
        copy.splice(i, 1);
        if (isSafe(copy)) {
            return true;
        }
    }

    return false;
}

function getLevels() {
    const file = fs.readFileSync('src/day2/input.txt', 'utf8');
    const lines = file.split('\n');
    let levels = [];
    let level: number[] = [];
    // each line is a list of levels
    for (let line of lines) {
        const lvl = line.split(' ');
        for (let l of lvl) {
            level.push(Number(l));
        }
        levels.push(level);
        level = [];
    }
    return levels;
}

function part1(){
    const levels = getLevels();
    let safeCount = 0;
    for (let level of levels){
        if (isSafe(level)){
            safeCount++;
        }
    }
    console.log(safeCount);
}

function part2(){
    const levels = getLevels();
    let safeCount = 0;
    for (let level of levels){
        if (isSafeWithOneRemoval(level)){
            safeCount++;
        }
    }
    console.log(safeCount);
}


part1();
part2();
