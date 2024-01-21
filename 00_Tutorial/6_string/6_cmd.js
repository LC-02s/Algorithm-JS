// https://www.acmicpc.net/problem/1032 (명령 프롬프트)

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const input = `3
c.user.mike.programs
c.user.nike.programs
c.user.rice.programs`.split('\n');

/*
const [ n, ...arr ] = input;
const result = [];

for (let i = 0; i < arr[0].length; i += 1) {
    const strSet = new Set();
    for (let j = 0; j < n; j += 1) strSet.add(arr[j][i]);
    result[i] = strSet.size === 1 ?  arr[0][i] : '?'; 
}
console.log(result.join(''));
*/

/*
const [ n, ...arr ] = input;
const result = Array.from({ length: arr[0].length }, () => '');

console.log(result.map((el, idx) => {
    const strSet = new Set();
    for (let j = 0; j < n; j += 1) strSet.add(arr[j][idx]);
    return strSet.size === 1 ?  arr[0][idx] : '?';
}).join(''));

*/

const [ n, ...arr ] = input;
const result = Array.from({ length: arr[0].length }, () => '');

console.log(result.map((el, idx) => arr.some(el => el[idx] !== arr[0][idx]) ? '?' : arr[0][idx]).join(''));



// let [N, ...input] = require('fs').readFileSync('dev/stdin').toString().trim().split("\n").map((line)=> line.replace(/\n|\r|\s*/g, ""));

// let differentPart = '';

// for (let i = 0; i < input[0].length; i++) {
//   const char = input[0][i];
//   if (input.some((str) => str[i] !== char)) {
//     differentPart += '?';
//   } else {
//     differentPart += char;
//   }
// }

// console.log(differentPart);