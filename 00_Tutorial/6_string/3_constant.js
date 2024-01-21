// https://www.acmicpc.net/problem/2908 (상수)

/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const arr = input[0].split(' ').map(el => {
    return Number(el.split('').reverse().join(''));
});
console.log(Math.max(...arr));
*/

/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let a = input[0].split(' ')[0];
let b = input[0].split(' ')[1];

let newA = a[2] + a[1] + a[0];
let newB = b[2] + b[1] + b[0];

console.log(Math.max(Number(newA), Number(newB)));
*/