// https://www.acmicpc.net/problem/10773 (제로)

/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = `10
1
3
5
4
0
0
7
0
0
6`.split('\n');

const [ n, ...account ] = input.map(Number);
const stack = [];

account.forEach((num) => {
    if (num) { stack.push(num); }
    else { stack.pop(); }
});

const result = stack.reduce((a, b) => a + b, 0);

console.log(result);