// https://www.acmicpc.net/problem/2750 (수 정렬하기 1)

/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

*/
const input = `-5
5
2
3
4
1`.trim().split('\n');

// 진짜 중복 없애는 거
// const arr = new Set(input.map(Number));
// console.log([...arr].sort((a, b) => a - b).join('\n'));

const [ , ...arr ] = input.map(Number);
console.log(arr.sort((a, b) => a - b).join('\n'));