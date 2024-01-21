// https://www.acmicpc.net/problem/1946 (신입 사원)

/*
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
*/
const input = `2
5
3 2
1 4
4 1
2 3
5 5
7
3 6
7 3
4 2
1 4
5 7
2 5
6 1`.trim().split('\n');

const [ n, ...arr ] = input;
const result = arr
    .reduce((acc, cur, idx) => {
        if (cur.length == 1) acc.push([...arr].slice(idx + 1, idx + Number(cur) + 1));
        return acc;
    }, ([]))
    .map(item => item.map(el => el.trim().split(' ').map(Number)))
    .map(item => item.sort((a, b) => a[0] - b[0]))
    .map(item => item.reduce((acc, cur) => {
        // acc[ cnt, min ]
        return acc[1] > cur[1] ? ([ acc[0] + 1, cur[1] ]) : acc;
    }))
    .map(item => item[0])
    .join('\n');
    
console.log(result);


/*
let testCase = Number(input[0]);
let line = 1;
for (let tc = 0; tc < testCase; tc += 1) {
    n = Number(input[line]);
    let arr = [];
    for (let i = line + 1; i <= line + n; i += 1) {
        let data = input[i].split(' ').map(Number);
        arr.push(data);
    }
    arr.sort((x, y) => x[0] - y[0]);
    let cnt = 0;
    let minValue = 100001;
    for (let [ x, y ] of arr) {
        if (y < minValue) {
            minValue = y;
            cnt += 1;
        }
    }
    console.log(cnt);
    line += n + 1;
}
*/

/*
// 코치님 테스트 내용
let idx = 0;
const T = input[idx];
idx++;
const arr = [];

for (let t = 0; t < T; t++) {
    const N = Number(input[idx]);
    idx++;
    const inner = [];
    for (let n = 0; n < N; n++) {
        let data = input[idx].split(' ').map(Number);
        inner.push(data);
        idx++;
    }
    arr.push(inner);
}
console.log(arr);

const result = arr
    .map(item => item.sort((a, b) => a[0] - b[0]))
    .map(item => item.reduce((acc, cur) => {
        return acc[1] > cur[1] ? ([acc[0] + 1, cur[1]]) : acc;
    }))
    .map(item => item[0])
    .join('\n');

console.log(result);
*/