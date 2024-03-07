// https://www.acmicpc.net/problem/3079 (입국 심사)

/*
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/).map(BigInt);
*/

const input = `2 6
7
10`.trim().split(/\s/).map(BigInt);

const [ n, m, ...times ] = input;

let min = 1n;
let max = 10n ** 9n * m;

while (min < max) {
    const mid = BigInt((min + max) / 2n);
    const passed = times.reduce((passed, time) => passed + BigInt(mid / time), 0n);
    passed < m ? (min = mid + 1n) : (max = mid);
}

console.log(max.toString());