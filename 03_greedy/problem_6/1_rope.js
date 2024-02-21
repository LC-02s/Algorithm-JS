// https://www.acmicpc.net/problem/2217 (로프)

/*
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = `2
10
15`.trim().split('\n')
const [ n, ...ropes ] = input;
const maxWeight = ropes.map(Number).sort((a, b) => a - b)
    .reduce((max, rope, i) => Math.max(max, rope * (ropes.length -  i)), 0);

console.log(maxWeight);