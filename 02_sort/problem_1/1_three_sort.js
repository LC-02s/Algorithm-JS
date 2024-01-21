// https://www.acmicpc.net/problem/2752 (세수정렬)

/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

*/
const input = `30 20 10`.split('\n');
const arr = input[0].split(' ').map(Number);
console.log(arr.sort((a, b) => a - b).join(' '));