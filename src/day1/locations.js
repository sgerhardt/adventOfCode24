"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function getLists() {
    var file = fs.readFileSync('foo.txt', 'utf8');
    var lines = file.split('\n');
    var list1 = [];
    var list2 = [];
    for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
        var line = lines_1[_i];
        var _a = line.split(','), x = _a[0], y = _a[1];
        list1.push(Number(x));
        list2.push(Number(y));
    }
    list1.sort(function (a, b) { return a - b; });
    list2.sort(function (a, b) { return a - b; });
    return [list1, list2];
}
function part1() {
    var _a = getLists(), list1 = _a[0], list2 = _a[1];
    // subtract the value from each list at each index and then sum
    var sum = 0;
    for (var i = 0; i < list1.length; i++) {
        sum += Math.abs(list1[i] - list2[i]);
    }
    console.log(sum);
}
