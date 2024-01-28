// https://www.acmicpc.net/problem/9009 (피보나치)

/*
피보나치 수 : 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
명제 : 양의 정수는 하나 혹은 그 이상의 서로 다른 피보나치 수들의 합으로 나타낼 수 있음
ex)
 > 100 = 3 + 8 + 89
 > 100 = 1 + 2 + 8 + 89
 > 100 = 3 + 8 + 34 + 55
[문제 해결 방법] 가능한 가장 큰 피보나치 수부터 빼 나갈 때 최소 개수를 만족할 수 있음
 > X - A는 A 보다 작은 서로 다른 피보나치 수들의 합으로 표현 가능하기 때문
  *A: 가능한 가장 큰 피보나치 수를 의미함
*/

/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = `4
100
200
12345
1003`.trim().split('\n');

const fiboArr = [ 0, 1 ];
while (fiboArr[fiboArr.length - 1] < 1e9) {
    fiboArr.push(fiboArr[fiboArr.length - 2] + fiboArr[fiboArr.length - 1]);
}

let testCase = Number(input[0]);

for (let tc = 1; tc <= testCase; tc += 1) {
    let n = Number(input[tc]);
    let result = [];
    let i = fiboArr.length - 1; // 가장 큰 피보나치 수의 인덱스
    while (n > 0) {
        if (n >= fiboArr[i]) { // 가장 큰 피보나치 수부터 빼기
            n -= fiboArr[i];
            result.push(fiboArr[i]);
        }
        i -= 1;
    }
    console.log(result.reverse().join(' ')); // 오름차순 출력
}

