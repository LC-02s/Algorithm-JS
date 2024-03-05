// https://www.acmicpc.net/problem/6236 (용돈 관리)

/*
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/).map(Number);
*/

const input = `7 5
100
400
300
100
500
101
400`.trim().split(/\s/).map(Number);

const [ n, m, ...pocketMoneys ] = input;

console.log(pocketMoneys);