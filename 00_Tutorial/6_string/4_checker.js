// https://www.acmicpc.net/problem/1316 (그룹 단어 체커)

/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

function check(data) {
    let setData = new Set(data[0]);
    for (let i = 0; i < data.length - 1; i += 1) {
        // 오른쪽 단어와 다름
        if (data[i] != data[i + 1]) {
            // 이미 등장한 적 있는 알파벳
            if (setData.has(data[i + 1])) return false;
            else setData.add(data[i + 1]);
        }
    }
    return true;
}

const n = Number(input[0]);
let summary = 0;

for (let i = 1; i <= n; i += 1) {
    if (check(input[i])) summary += 1;
}
console.log(summary);
*/


// const data = `3
// happy
// new
// year
// `;
const data = `4
aba
abab
abcabc
a
`;
const input = data.split('\n');

function check(data) {
    let setData = new Set(data[0]);
    for (let i = 0; i < data.length - 1; i += 1) {
        // 오른쪽 단어와 다름
        if (data[i] != data[i + 1]) {
            // 이미 등장한 적 있는 알파벳
            if (setData.has(data[i + 1])) return false;
            else setData.add(data[i + 1]);
        }
    }
    return true;
}

const n = Number(input[0]);
let summary = 0;

for (let i = 1; i <= n; i += 1) {
    if (check(input[i])) summary += 1;
}
console.log(summary);

/*
- 각 알파벳을 하나씩 확인할 수 있음
- a부터 z까지 총 26개의 알파벳이 있음
- 각 알파벳에 대하여 연속해서 등장한 횟수가 1번인지 체크
*/