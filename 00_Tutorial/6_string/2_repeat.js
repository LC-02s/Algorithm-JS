// https://www.acmicpc.net/problem/2675 (문자열 반복)

/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const testCase = Number(input[0]);

for (let i = 1; i <= testCase; i += 1) {
    const arr = input[i].split(' ');
    const RR = Number(arr[0]);
    const str = arr[1].split('');
    let answer = '';
    str.forEach(el => {
        for (let j = 0; j < RR; j += 1) answer += el;
    });
    console.log(answer);
}
*/

/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const testCase = Number(input[0]);

for (let i = 1; i <= testCase; i += 1) {
    const [r, s] = input[i].split(' ');
    let result = "";
    for (let j = 0; j <= s.length; j += 1) {
        result += s.charAt(j).repeat(r);
    }
    console.log(result);
}
*/