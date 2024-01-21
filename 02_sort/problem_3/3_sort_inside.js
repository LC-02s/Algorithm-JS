// https://www.acmicpc.net/problem/1427 (소트 인사이드)
// counting sort (개수 정렬) 문제와 유사함

/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('');
*/

const n = '12624623';
const cnt = Array(10).fill(0);
let answer = '';

for (let x of n) {
    cnt[Number(x)] += 1;
}
for (let i = 9; i >= 0; i -= 1) {
    for(let j = 0; j < cnt[i]; j += 1) answer += i + '';
}

console.log(answer);
// 메모리 : 9320KB, 시간 : 128ms

/*
// 개인 풀이
const input = '2143'.trim().split('');

console.log(input.sort((a, b) => {
    if (a > b) return -1;
    else if (b < a) return 1;
    else return 0;
}).join(''));
// 메모리 : 9324KB, 시간 : 128ms
*/