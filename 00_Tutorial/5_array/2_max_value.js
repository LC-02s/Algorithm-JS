// https://www.acmicpc.net/problem/2562 (최대값)

/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number);

const result = input.reduce((acc, cur, idx) => {
    if (Math.max(acc[0], cur) === cur) {
        return ([input[idx], idx]);
    } else return acc;
}, ([input[0], 0]));

console.log(result[0] + '\n' + (result[1] + 1));
*/

const input = [12, 15, 23, 53, 5];
const result = input.reduce((acc, cur, idx) => {
    if (Math.max(acc[0], cur) === cur) {
        return ([input[idx], idx]);
    } else return acc;
}, ([input[0], 0]));

console.log(result[0] + '\n' + (result[1] + 1));

/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let maxIndex = 0;
let maxValue = 0;
for (let i = 0; i < 9; i +=1) {
    const data = Number(input[i]);
    if (maxValue < data) {
        maxValue = data;
        maxIndex = i;
    }
}

console.log(maxValue);
console.log(maxIndex + 1);
*/

/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const data = input.map(e => Number(e));
const max = Math.max(...data);

console.log(max);
console.log(input.indexOf(max) + 1);
*/

/*
- 배열의 원소를 하나씩 확인하여, 최댓값과 그 인덱스를 찾는 문제
- 계속해서 가장 큰 값을 가지는 원소의 인덱스(index)를 업데이트
- 원소를 차례대로 하나씩 확인한다는 점에서 시간 복잡도 O(N)로 해결할 수 있음
*/
