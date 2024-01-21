// https://www.acmicpc.net/problem/2751 (수 정렬하기 2)

/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

*/
const input = `-5
5
2
3
4
1`.trim().split('\n');

const [ , ...arr ] = input;
console.log(arr.sort((a, b) => a - b).join('\n'));

// N의 범위 1,000,000개 > 시간 복잡도 n^2의 알고리즘은 시간 초과됨
// 메모리 : 208544KB, 시간 : 2188ms