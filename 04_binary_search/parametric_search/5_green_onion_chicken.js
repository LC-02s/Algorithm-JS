// https://www.acmicpc.net/problem/14627 (파닭파닭)

/*
const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split(/\s/).map(BigInt);
*/

const input = `3 5
440
350
230`.trim().split(/\s/).map(BigInt);

const [ s, c, ...greenOnions ] = input;
const totalLength = greenOnions.reduce((a, b) => a + b);

let start = 0n;
let end = 1000000000n;

while (start <= end) {
    const mid = BigInt((start + end) / 2n);
    const expectedAmount = greenOnions
        .reduce((amount, greenOnion) => amount + BigInt(greenOnion / (mid || 1n)), 0n);
    if (expectedAmount < c) end = mid - 1n;
    else start = mid + 1n;
}

console.log((totalLength - end * c).toString());