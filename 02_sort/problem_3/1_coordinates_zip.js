// https://www.acmicpc.net/problem/18870 (좌표 압축)

/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/
const input = `5
2 4 -10 4 -9`.trim().split('\n');

// const [ n, str ] = input;
// const arr = str.split(' ');
// console.log(arr.map((el, idx, src) => {
//     return src.filter(target => target !== el && target < el).length;
// }).join(' '));

// const arr = input[1].split(' ');
// let result = '';

// for (let el of arr) {
//     result += arr.filter(target => target !== el && target < el).length + ' ';
// }
// console.log(result);

// 메모리 초과 및 N 제곱의 시간 복잡도를 가져서 아마 시간초과도 났을 듯

// const [ , str ] = input;
// const arr = str.split(' ');
// const group = [ ...new Set(arr) ].sort((a, b) => a - b);
// const obj = {};
// let result = '';

// group.forEach((el, idx) => obj[el] = idx);
// arr.forEach(el => result += obj[el] + ' ');

// console.log(result);

// 시간 복잡도 : NlogN + 2N > O(NlogN)
// 메모리 : 291152KB, 시간 : 3508ms

const [ , str ] = input;
const arr = str.split(' ');
const sorted = [ ...new Set(arr) ]
    .sort((a, b) => a - b)
    .reduce((acc, cur, idx) => {
        acc[cur] = idx;
        return acc;
    }, ({}));

// console.log(arr.map(el => sorted[el]).join(' '));
console.log(arr.reduce((acc, el) => acc += sorted[el] + ' ', ''));


// const [ , str ] = input;
// const arr = str.split(' ');
// const sorted = [ ...new Set(arr) ]
//     .sort((a, b) => a - b)
//     .reduce((obj, key, value) => (obj[key] = value, obj), {});

    // .map((el, idx) => ({ [el]: idx }))
    // .reduce((acc, cur) => Object.assign(acc, cur))

    // .reduce((acc, cur, idx) => {
    //     acc[cur] = idx;
    //     return acc;
    // }, ({}));

// console.log(sorted);

// console.log(sorted);