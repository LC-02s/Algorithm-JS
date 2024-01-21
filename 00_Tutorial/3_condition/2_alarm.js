// https://www.acmicpc.net/problem/2884 (알람 시계)

/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const data = input[0].split(' ');

const HH = Number(data[0]);
const MM = Number(data[1]);

if (MM >= 45) {
    console.log(HH, MM - 45);
} else {
    if (HH === 0) console.log(23, MM + 15);
    else console.log(HH - 1, MM + 15);
}
*/

/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const hour = Number(input[0].split(' ')[0]);
const minute = Number(input[0].split(' ')[1]);

if (minute < 45) { // 분이 45분 미만일 때
    hour -= 1;
    minute += 15;
    if (hour < 0) hour = 23;
} else minute -= 45;

console.log(hour + " " + minute);
*/

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line) => {
    input = line.split(' ');
}).on('close', () => {
    const HH = Number(input[0]);
    const MM = Number(input[1]);

    if (MM >= 45) {
        console.log(HH, MM - 45);
    } else {
        if (HH === 0) console.log(23, MM + 15);
        else console.log(HH - 1, MM + 15);
    }

    process.exit();
});
