// https://www.acmicpc.net/problem/2343 (기타 레슨)

/*
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/).map(Number);
*/

const input = `9 3
1 2 3 4 5 6 7 8 9`.trim().split(/\s/).map(Number);

const [ n, m, ...lessons ] = input;

let start = Math.max(...lessons);
let end = lessons.reduce((a, b) => a + b, 0);

let bluelay = Infinity;
while (start <= end) {
    const mid = parseInt((start + end) / 2);
    let count = 1;
    let sum = 0;
    for (const lesson of lessons) {
        if (lesson > mid) {
            count = Infinity;
            break;
        }
        if (sum + lesson <= mid) sum += lesson;
        else {
            count += 1;
            sum = lesson;
        }
    }
    if (count <= m) {
        end = mid - 1;
        bluelay = Math.min(bluelay, mid);
    }
    else start = mid + 1;
 }

console.log(bluelay);