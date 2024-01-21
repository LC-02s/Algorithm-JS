// https://www.acmicpc.net/problem/16953 (A -> B)

/*
let [ A, B ] = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split(' ')
    .map(Number);
*/

let [ A, B ] = `100 40021`.trim().split(' ').map(Number);
/*
// 접근은 같았는데 왜 틀렸을까 -> 디버깅 용 콘솔로그 때문이었음 ㅅㅂ
let cnt = 0;

while (A <= B) {
    if (A != B && String(B)[String(B).length - 1] == '1') {
        B = Number(String(B).slice(0, String(B).length - 1));
        console.log(B);
        cnt += 1;
    } else if (A != B && B % 2 == 0) {
        B /= 2;
        console.log(B);
        cnt += 1;
    } else break;
}
console.log(A == B ? cnt + 1 : -1);
*/

let cnt = 1;
let flag = false;

while (A <= B) {
    if (A == B) { flag = true; break; }
    if (B % 2 == 0) { B = parseInt(B / 2) }
    else if (B % 10 == 1) { B = parseInt(B / 10) }
    else break;
    cnt += 1;
}
console.log(flag ? cnt : -1);
