// https://www.acmicpc.net/problem/10814 (나이순 정렬)
// stable sort (안정 정렬) 문제 > node.js의 정렬은 기본적으로 stable sort임

/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/
const input = `3
21 Junkyu
21 Dohyun
20 Sunyoung`.trim().split('\n');

/*
const n = Number(input[0]);
const arr = [];
let answer = '';

for (let i = 1; i <= n; i += 1) {
    const [ age, name ] = input[i].split(' ');
    arr.push([ Number(age), name ]);
}
arr.sort((a, b) => a[0] - b[0]);
for (let x of arr) answer += x[0] + " " + x[1] + "\n";

console.log(answer);

// 메모리 : 47696KB, 시간 : 404ms 
*/

const [ n, ...arr ] = input;
const newArr = arr.map((el, idx) => {
    const [ age, name ] = el.trim().split(' ');
    const obj = {};
    obj['age'] = Number(age);
    obj['name'] = name;
    obj['idx'] = idx;
    return obj;
}).sort((a, b) => a.age == b.age ? a.idx - b.idx : a.age - b.age);
let result = '';
newArr.forEach(el => result += `${el.age} ${el.name}\n`);

console.log(result);

// 시간 복잡도 : NlogN + 2N > O(NlogN)
// 메모리 : 47936KB, 시간 : 424ms