// https://www.acmicpc.net/problem/4344 (평균은 넘겠지)

/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const n = Number(input[0]);
for (let i = 1; i <= n; i += 1) {
    const arr = input[i].split(' ').map(Number);
    const m = arr[0]

    let sum = 0;
    for (let j = 1; j <= m; j += 1) sum += arr[j];
    const avr = sum / m;

    const person = arr.reduce((acc, cur) => {
        if (cur > avr) return acc += 1;
        else return acc;
    }, 0);
    const ratio = person / m * 100;

    console.log(ratio.toFixed(3) + '%');
};
*/

const data = `5
5 50 50 70 80 100
7 100 95 90 80 70 60 50
3 70 90 80
3 70 90 81
9 100 99 98 97 96 95 94 93 91
`;
const input = data.split('\n');
const n = Number(input[0]);
// // 1
// for (let i = 1; i <= n; i += 1) {
//     const arr = input[i].split(' ').map(Number);
//     const m = arr[0]

//     let sum = 0;
//     for (let j = 1; j <= m; j += 1) sum += arr[j];
//     const avr = sum / m;

//     // const cnt = arr.reduce((acc, cur, idx) => idx != 0 && cur > avr ? acc += 1 : acc);
//     const cnt = arr.reduce((acc, cur, idx) => {
//         if (idx != 0 && cur > avr) return acc += 1;
//         else return acc;
//     }, 0);

//     console.log((cnt / m * 100).toFixed(3) + '%');
// };

// 2
for (let i = 1; i <= n; i += 1) {
    const arr = input[i].split(' ').map(Number);
    const m = arr[0]

    let sum = 0;
    for (let j = 1; j <= m; j += 1) sum += arr[j];
    const avr = sum / m;

    const cnt = arr.filter((el, idx) => idx != 0 && el > avr);

    console.log((cnt.length / m * 100).toFixed(3) + '%');
};

// // 3
// for (let i = 1; i <= n; i += 1) {
//     const [ m, ...arr ] = input[i].split(' ').map(Number);
//     const avr = arr.reduce((acc, cur) => acc += cur) / m;
//     const cnt = arr.filter(el => el > avr).length;

//     console.log((cnt / m * 100).toFixed(3) + '%');
// };