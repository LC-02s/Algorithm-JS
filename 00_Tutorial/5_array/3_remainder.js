// https://www.acmicpc.net/problem/3052 (나머지)

/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number);
input.pop();

const valueSet = new Set();

input.forEach(el => {
    valueSet.add(el % 42);
});
console.log(valueSet.size);
*/


// const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const input = [42, 84, 252, 420, 840, 126, 42, 84, 420, 126];
// const input = [39, 40, 41, 42, 43, 44, 82, 83, 84, 85];
const value = `39
40
41
42
43
44
82
83
84
85
`;
const input = value.split('\n').map(Number);
const valueSet = new Set();

input.forEach(el => {valueSet.add(el % 42)});
console.log(valueSet.size, input);

/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const data = input.map(Number);
const mySet = new Set(); // 집합 객체 생성

for (let i = 0; i < 10; i +=1) {
    mySet.add(data[i] % 42);
}
console.log(mySet.size);
*/

