// https://www.acmicpc.net/problem/2110 (공유기 설치)

/*
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/).map(Number);
*/

const input = `5 3
1
2
8
4
9`.trim().split(/\s/).map(Number);

const [ n, c, ...houses ] = input;
houses.sort((a, b) => a - b);

let start = 0;
let end = houses[houses.length - 1];

while (start <= end) {
    const mid = parseInt((start + end) / 2);
    
    let needed = c - 1;
    let prevPoint = houses[0];
    for (let i = 1; i < houses.length; i += 1) {
        if (houses[i] - prevPoint >= mid) {
            needed -= 1;
            prevPoint = houses[i];
        }
    }

    if (needed <= 0) start = mid + 1;
    else end = mid - 1;
}

console.log(end);
