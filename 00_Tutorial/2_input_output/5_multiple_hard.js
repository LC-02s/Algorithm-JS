// https://www.acmicpc.net/problem/2588 (곱셈)

/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const a = parseInt(input[0]);
const b = parseInt(input[1]);
input[1].split('').reverse().forEach(el => console.log(a * Number(el)));
console.log(a * b);
*/

/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const a = input[0];
const b = input[1];

x_1 = b[2]; // 일의 자리
x_2 = b[1]; // 십의 자리
x_3 = b[0]; // 백의 자리

console.log(Number(a) * Number(x_1));
console.log(Number(a) * Number(x_2));
console.log(Number(a) * Number(x_3));
console.log(Number(a) * Number(b));
*/

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    const a = Number(input[0]);
    const b = Number(input[1]);
    input[1].split('').reverse().forEach(el => console.log(a * Number(el)));
    console.log(a * b);
    process.exit();
});