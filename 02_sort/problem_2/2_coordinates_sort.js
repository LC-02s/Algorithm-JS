// https://www.acmicpc.net/problem/11651 (좌표 정렬하기 2)

/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/
const input = `5
0 4
1 2
1 -1
2 2
3 3`.trim().split('\n');

const n = Number(input[0]);
const data = [];
for (let i = 1; i <= n; i += 1) {
    const [ x, y ] = input[i].split(' ').map(Number);
    data.push([x, y]);
}

function compare(a, b) {
    if (a[1] == b[1]) return a[0] - b[0];
    else return a[1] - b[1];
}
data.sort(compare);

let answer = '';
for (let point of data) {
    answer += point[0] + ' ' + point[1] + '\n';
}
console.log(answer);

// 메모리 : 62540KB, 시간 : 524ms



// const [ , ...arr ] = input;

// console.log(arr.sort((a, b) => {
//     const [ x1, y1 ] = a.split(' ').map(Number);
//     const [ x2, y2 ] = b.split(' ').map(Number);
//     return y1 == y2 ? x1 - x2 : y1 - y2;
// }).join('\n'));

// 메모리 : 45708KB, 시간 : 2400ms
