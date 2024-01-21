// https://www.acmicpc.net/problem/8393 (합)

/*
const fs = require('fs');
const input = Number(fs.readFileSync('/dev/stdin').toString().split('\n')[0]);
let total = 0;
for (let i = 1; i <= input; i += 1) total += i;
console.log(total);
*/

/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 문자열을 수로 변활할 때 일반적으로 parseInt 보다 Number가 더 빠르게 동작함
let n = Number(input[0]);
let summary = 0;

for (let i = 1; i <= n; i += 1) {
    summary += i;
}
console.log(summary);
*/

/*
const fs = require('fs');
const n = Number(fs.readFileSync('/dev/stdin').toString().split('\n')[0]);

// 등차수열 공식 활용
console.log(n * (n + 1) / 2);
*/

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = 0;

rl.on('line', (line) => {
    input = Number(line);
}).on('close', () => {    
    let total = 0;
    for (let i = 1; i <= input; i += 1) total += i;
    console.log(total);
    process.exit();
});
