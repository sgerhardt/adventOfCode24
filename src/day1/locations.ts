import * as fs from 'fs';

function getLists(){
    const file = fs.readFileSync('src/day1/input','utf8');
    const lines = file.split('\n');
    const list1 :number[] = [];
    const list2 :number[] = [];
    for (let line of lines){
        const [x,y] = line.split('   ');
        list1.push(Number(x));
        list2.push(Number(y));
    }
    list1.sort((a,b)=>a-b);
    list2.sort((a,b)=>a-b);
    return [list1,list2];
}


export function calc(list1: number[], list2: number[]) {
    let sum = 0;
    for (let i = 0; i < list1.length; i++) {
        sum += Math.abs(list1[i] - list2[i]);
    }
    return sum;
}

function part1(){
    const [list1, list2]  = getLists();
    // subtract the value from each list at each index and then sum
    let sum = calc(list1, list2);
    console.log(sum);
}

function part2(){
    const [list1, list2] = getLists();
    let sum = 0;
    // get similarity score - for each value in list1, find how many times that value appears in list2.
    // E.g. if 3 is in list1 and in list2 3 times, then the similiarty score is 3 * 3 = 9.
    for (let i= 0; i < list1.length; i++){
        let value = list1[i];
        let count = list2.filter((num) => num === value).length;
        sum += value * count;
    }
    console.log(sum);
}

part1();
part2();