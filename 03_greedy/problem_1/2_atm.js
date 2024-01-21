// https://www.acmicpc.net/problem/11399 (ATM)

/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/
const input = `5
3 1 4 3 2`.trim().split('\n');

/*
// 권장 풀이
const n = Number(input[0]);
const arr = input[1].split(' ').map(Number).sort((a, b) => a - b);
let answer = 0;
let summary = 0;
for (let i = 0; i < n; i += 1) {
    summary += arr[i];
    answer += summary;
}
console.log(answer);
*/

/*
// 비효율적인 줄서기 코드 구현 ㅋㅋ
const [ n, pStr ] = input;
const pArr = pStr.split(' ').map(Number);
const result = [];
const timeArr = pArr.reduce((acc, cur) => {
    result.push(acc + cur);
    return acc + cur;
}, 0);
console.log(result.reduce((acc, cur) => acc + cur));
*/

/*
// 개인 풀이 1
const [ n, pStr ] = input;
const pArr = pStr.split(' ').map(Number);
const result = [];
const timeArr = pArr.reduce((acc, cur) => {
    result.push(acc + cur);
    return acc + cur;
}, 0);
console.log(result.reduce((acc, cur) => acc + cur));
*/

// 개인 풀이 2
const [ n, pStr ] = input;
const pArr = pStr.split(' ').sort((a, b) => a - b).map(Number);
const result = pArr.reduce((acc, cur) => {
    return ([ acc[0] + cur, acc[0] + cur + acc[1] ]);
}, ([ 0, 0 ]));
console.log(result[1]);

// 앞의 사람이 끝나야 수행할 수 있기 때문에 기다린 시간과 걸린 시간을 누적해야 함
// 기다린 시간도 누적되기 때문에 초반에 빠른 작업을 수행하면 전체 시간이 빨라짐
// [ (뒷사람이 기다릴 시간 = 진행된 시간), (진행된 시간 + 걸린 시간 = 현재 시간) ]

// [ 1, 2, 3, 3, 4 ] 라운드 로빈 스케줄링?
// 0 0
// 1 1
// 3 4
// 6 10
// 9 19
// 13 32
// 메모리 : 9648KB, 시간 : 132ms