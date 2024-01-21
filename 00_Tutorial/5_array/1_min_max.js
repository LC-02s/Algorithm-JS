// https://www.acmicpc.net/problem/10818 (최소, 최대)

/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);
const data = input[1].split(' ');
let max = Number(data[0]);
let min = Number(data[0]);

for (let i = 1; i <= n; i += 1) {
    if (data[i] > max) max = Number(data[i]);
    if (data[i] < min) min = Number(data[i]);
}
console.log(min, max);
*/

console.log('87' > 12);
console.log('0' == 0);

/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// 모든 정수는 -1,000,000보다 크거나 같고,
// 1,000,000보다 작거나 같은 정수
let max = -1000001;
let min = 1000001;

for (let i = 1; i <= n; i += 1) {
    if (arr[i] > max) max = Number(arr[i]);
    if (arr[i] < min) min = Number(arr[i]);
}
console.log(min, max);
*/

/*
문제 풀이 핵심 아이디어
 - 배열의 원소를 하나씩 확인하여, 최댓값과 최솟값을 찾는 문제
 - 최댓값(max value)과 최솟값(min value) 정보를 업데이트 함
 - 이 경우 시간 복잡도는 O(N)
*/
