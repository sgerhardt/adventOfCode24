import fs from "fs";

export function mul(input :string):number{
    //parse out strings that begin with "mul(" followed exactly by 1-3 digits and then a comma and then 1-3 more digits
    //and an ending paren.
    const regex = /mul\((\d{1,3}),(\d{1,3})\)/g;
    const matches = input.matchAll(regex);
    let sum = 0;
    for (const match of matches){
        sum += parseInt(match[1]) * parseInt(match[2]);
    }

    return sum;
}

export function mul2(splitDos :string[]):number{
    let sum = 0;
    for (const split of splitDos){
        sum += mul(split);
    }
    return sum;
}

function part1(){
    const file = fs.readFileSync('src/day3/input.txt', 'utf8');
    const sum = mul(file);
    console.log(sum);
}

export function parse(file: string) {
    let splitDo = file.split(`do()`)
    for (let i = 0; i < splitDo.length; i++) {
        let index = splitDo[i].indexOf("don't()");
        if (index !== -1) {
            splitDo[i] = splitDo[i].substring(0, index);
        }
    }
    return splitDo;
}

function part2(){
    const file = fs.readFileSync('src/day3/input.txt', 'utf8');
    let splitDo = parse(file);
    const sum = mul2(splitDo);
    console.log(sum);
}

part1();
part2();