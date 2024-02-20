// https://www.acmicpc.net/problem/11497 (통나무 건너뛰기)

/*
const filePath = process.platform == 'linux' ? '/dev/stdin' : './input.txt';
const fs = require('fs');
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
const input = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    // [ paste your code ]
    process.exit();
});
*/

const input = `3
7
13 10 12 11 10 11 12
5
2 4 5 7 9
8
6 6 6 6 6 6 6 6`.trim().split('\n');

const [ t, ...strLogs ] = input;

const minLogsLevel = strLogs
    .reduce((arr, str, i) => i % 2 !== 0 ? (arr.push(str.trim().split(' ').map(Number).sort((a, b) => a - b)), arr) : arr, [])
    .map((l) => l.reduce((max, log, i, logs) => Math.max(max, Math.abs(log - logs[i + 2] || 0)), 0)).join('\n');

console.log(minLogsLevel);
