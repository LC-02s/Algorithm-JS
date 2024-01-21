// https://www.acmicpc.net/problem/1789 (수들의 합)

/*
let S = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
*/
let S = 200;

/*
let cnt = 0;
for (let i = 1; i < S; i += 1) {
    S -= i;
    cnt += 1;
}
console.log(cnt);
*/

let sum = 0;
let cur = 0;

while (sum <= S) {
    cur += 1;
    sum += cur;
}
console.log(cur - 1);
