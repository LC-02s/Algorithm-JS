// https://www.acmicpc.net/problem/2525 (오븐 시계)

/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const HH = Number(input[0].split(' ')[0]);
const MM = Number(input[0].split(' ')[1]);
const TM = Number(input[1]);

const RH = parseInt((MM + TM) / 60) + HH;
const RM = (MM + TM) % 60;

console.log(RH > 23 ? RH - 24 : RH, RM);
*/

/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [a, b] = input[0].split(' ').map(Number);
const c = Number(input[1]);

let totalMinute = a * 60 + b + c; // 시를 분의 형태로 바꿈
totalMinute %= 1440;
const hour = parseInt(totalMinute / 60);
const minute = totalMinute % 60;

console.log(hour + " " + minute);
*/

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    const HH = Number(input[0].split(' ')[0]);
    const MM = Number(input[0].split(' ')[1]);
    const TM = Number(input[1]);

    const RH = parseInt((MM + TM) / 60) + HH;
    const RM = (MM + TM) % 60;

    console.log(RH > 23 ? RH - 24 : RH, RM);

    process.exit();
});
