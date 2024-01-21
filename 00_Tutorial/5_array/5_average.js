// https://www.acmicpc.net/problem/1546 (평균 조작)

/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);
const max = Math.max(...arr);
const newArr = [];
for (let i = 0; i < n; i += 1) newArr.push(arr[i] / max * 100);
let sum = 0;
newArr.forEach(el => sum += el);
console.log(sum / n);
*/
const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);
const max = Math.max(...arr);
const newArr = [];
arr.forEach(el => newArr.push(el / max * 100));
console.log(newArr.reduce((a, b) => a + b) / n);
