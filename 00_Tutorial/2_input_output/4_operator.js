// https://www.acmicpc.net/problem/10869 (사칙연산)

/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const line = input[0].split(' ');

const a = parseInt(line[0]);
const b = parseInt(line[1]);

console.log(`${a + b}\n${a - b}\n${a * b}\n${parseInt(a / b)}\n${a % b}`);
*/

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = [];

rl.on('line', (line) => {
    input = line.split(' ');
}).on('close', () => {
    const a = Number(input[0]);
    const b = Number(input[1]);
    console.log(`${a + b}\n${a - b}\n${a * b}\n${parseInt(a / b)}\n${a % b}`);
    process.exit();
});