// https://www.acmicpc.net/problem/1300 (K번째 수)

/*
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = `3
7`.trim().split('\n');

const [ n, k ] = input.map(Number);

/*
// 메모리 초과
const targetArr = Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => (i + 1) * (j + 1)));
const b = targetArr.reduce((arr, current) => arr.concat(current), []);
console.log(b[k]);
*/

let start = 1; // 배열에 존재할 수 있는 가장 작은 값
let end = 10 ** 10; // 배열에 존재할 수 있는 가장 큰 값

let result = 0;
while (start <= end) {
    const mid = parseInt((start + end) / 2);
    let total = 0; // mid 보다 작거나 같은 데이터의 개수
    for (let i = 1; i <= n; i += 1) total += Math.min(parseInt(mid / i), n); // 각 행마다 계산
    if (total >= k) {
        result = mid; // mid 보다 작거나 같은 데이터의 개수가 k 이상이라면 result에 기록함
        end = mid - 1;
    }
    else start = mid + 1; // mid 보다 작거나 같은 데이터의 개수가 k 미만이라면 범위 줄임
}

console.log(result);