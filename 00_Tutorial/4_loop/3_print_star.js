// https://www.acmicpc.net/problem/2438 (별찍기)

/*
const fs = require('fs');
const n = Number(fs.readFileSync('/dev/stdin').toString().split('\n')[0]);
for (let i = 1; i <= n; i += 1) {
    let str = '';
    for (let j = 1; j <= i; j += 1) str += '*';
    console.log(str);
};
*/

/*
const fs = require('fs');
const n = Number(fs.readFileSync('/dev/stdin').toString().split('\n')[0]);
let result = '';
for (let i = 1; i <= n; i += 1) { // 층(행)만큼 반복
    for (let j = 1; j <= i; j += 1) { // 현재 행만큼 별을 출력
        result += '*';
    }
    result += '\n';
};
console.log(result);
*/

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = 0;

rl.on('line', (line) => {
    input = Number(line);
}).on('close', () => {
    for (let i = 1; i <= input; i += 1) {
        let str = '';
        for (let j = 1; j <= i; j += 1) str += '*';
        console.log(str);
    };
    process.exit();
});
