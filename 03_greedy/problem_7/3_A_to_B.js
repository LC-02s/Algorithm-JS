// https://www.acmicpc.net/problem/16953 (A -> B)

/*
const input = require('fs').readFileSync(0, 'utf-8')
    .toString().trim().split(/\s/).map(Number);
*/

const input = `2 162`.trim().split(/\s/).map(Number);
let [ A, B ] = input;

let cnt = 1;
while (A <= B) {
    if (A != B && String(B)[String(B).length - 1] == '1') {
        B = Number(String(B).slice(0, String(B).length - 1));
        cnt += 1;
    } else if (A != B && B % 2 == 0) {
        B /= 2;
        cnt += 1;
    } else break;
}

console.log(A == B ? cnt : -1);