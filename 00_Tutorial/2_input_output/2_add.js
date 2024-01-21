// https://www.acmicpc.net/problem/1000 (덧셈)

/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const line = input[0].split(' ');

const a = parseInt(line[0]);
const b = parseInt(line[1]);

console.log(a + b);
*/

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = [];

rl.on('line', (line) => {
    input = line.split(' ');
}).on('close', () => {
    console.log(Number(input[0]) + Number(input[1]));
    process.exit();
});