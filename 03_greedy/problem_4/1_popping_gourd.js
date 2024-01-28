
// https://www.acmicpc.net/problem/19939 (박 터뜨리기)

/*
const fs = require('fs');
let [ n, k ] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
*/

let [ n, k ] = '6 3'.trim().split(' ').map(Number);

const summary = k * (k + 1) / 2; // 1부터 K까지의 합

if (summary > n) console.log(-1); // 공의 개수가 부족한 경우
else {
    n -= summary;
    if (n % k == 0) console.log(k - 1); // K개에 각각 1씩 더하기
    else console.log(k);
}