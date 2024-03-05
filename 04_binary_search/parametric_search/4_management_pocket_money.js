// https://www.acmicpc.net/problem/6236 (용돈 관리)

/*
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/).map(Number);
*/

const input = `7 5
100
400
300
100
500
101
400`.trim().split(/\s/).map(Number);

const [ n, m, ...pocketMoneys ] = input;

let start = Math.max(...pocketMoneys);
let end = pocketMoneys.reduce((a, b) => a + b, 0);

let unit = Infinity;
while (start <= end) {
    const mid = parseInt((start + end) / 2);
    let count = 1;
    let sum = 0;
    for (const money of pocketMoneys) {
        if (money > mid) {
            count = Infinity;
            break;
        }
        if (sum + money <= mid) sum += money;
        else {
            count += 1;
            sum = money;
        }
    }
    if (count <= m) {
        end = mid - 1;
        unit = Math.min(unit, mid);
    }
    else start = mid + 1;
 }

console.log(unit);