// https://www.acmicpc.net/problem/13164 (행복 유치원)

/*
const input = require('fs').readFileSync(0, 'utf-8')
    .toString().trim().split(/\s/).map(Number);
*/

const input = `5 3
1 3 5 6 10`.trim().split(/\s/).map(Number);

const [ n, k, ...students ] = input;

const diff = [];
for (let i = 0; i < n - 1; i += 1) diff.push(students[i + 1] - students[i]);

const result = diff
    .sort((a, b) => a - b)
    .slice(0, diff.length - (k - 1))
    .reduce((a, b) => a + b, 0);

console.log(result);