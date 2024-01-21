// https://www.acmicpc.net/problem/11047 (동전 0)

/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/
const input = `10 4200
1
5
10
50
100
500
1000
5000
10000
50000`.toString().trim().split('\n');

/*
let [ n, k ] = input[0].split(' ').map(Number);
const arr = [];
for (let i = 1; i <= n; i += 1) arr.push(Number(input[i]));

let cnt = 0;
for (let i = n - 1; i >= 0; i -= 1) {
    cnt += parseInt(k / arr[i]);
    k %= arr[i];
}
console.log(cnt);
// 메모리 : 9608KB, 시간 : 124ms
*/

const [ condition, ...coin ] = input;
const [ n, price ] = condition.split(' ').map(Number);

const result = coin.reverse().reduce((acc, cur) => {
    const cnt = parseInt(acc[0] / Number(cur));
    const money = acc[0] % Number(cur);
    return cnt > 0 ? ([ money, acc[1] + cnt ]) : acc;
}, ([ price, 0 ]));

console.log(result[1]);
// 메모리 : 9620KB, 시간 : 128ms