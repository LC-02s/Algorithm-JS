// https://www.acmicpc.net/problem/1541 (잃어버린 괄호)

/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('-');
*/
const input = `10+20+30+40`.trim().split('-');
const result = input.reduce((acc, cur, idx) => {
    const sum = cur.split('+').map(Number).reduce((a, b) => a + b);
    return idx == 0 ? acc += sum : acc -= sum;
}, 0);
console.log(result);