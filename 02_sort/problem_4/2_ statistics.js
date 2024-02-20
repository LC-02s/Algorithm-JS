// https://www.acmicpc.net/problem/2108 (통계학)

/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
*/

const input = `5
1
3
8
-2
2`.trim().split('\n').map(Number);

const [ n, ...targetNumber ] = input;

// 산술평균
const avg = Math.round(targetNumber.reduce((a, b) => a + b, 0) / targetNumber.length) || 0;
console.log(avg);

// 중앙값 - 버림
targetNumber.sort((a, b) => a - b);
const center = targetNumber[Math.floor(n / 2)];
console.log(center);

// 최빈값
const countMap = targetNumber.reduce((map, num) => map.set(num, map.get(num) + 1 || 1), new Map());
const maxCount = Math.max(...[...countMap].map(([ _, count ]) => count));
const manyValue = [...countMap].reduce((many, [ num, count ]) => (count === maxCount ? (many.push(num), many) : many), []);
console.log(manyValue.length > 1 ? manyValue[1] : manyValue[0]);

// 범위 (최대값 - 최소값)
const range = Math.max(...targetNumber) - Math.min(...targetNumber);
console.log(range);