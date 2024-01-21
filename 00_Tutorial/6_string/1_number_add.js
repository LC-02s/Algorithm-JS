// https://www.acmicpc.net/problem/11720 (숫자의 합)

/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const n = Number(input[0]);
const str = input[1].split('').map(Number);

console.log(str.reduce((acc, cur) => acc += cur));
*/

/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);
const str = input[1];

let answer = 0;
for (let x of str) answer += Number(x);
console.log(answer);
*/