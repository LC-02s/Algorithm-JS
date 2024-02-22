// https://www.acmicpc.net/problem/1758 (알바생 강호)

/*
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = `5
7
8
6
9
10`.trim().split('\n');

const [ n, ...tips ] = input.map(Number);

const maxTip = tips.sort((a, b) => b - a).reduce((keep, tip, i) => keep + (tip - i >= 0 ? tip - i : 0), 0);

console.log(maxTip);