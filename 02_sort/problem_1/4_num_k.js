// https://www.acmicpc.net/problem/11004 (k번째 수)

/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

*/
const input = `5 2
4 1 2 3 5`.trim().split('\n');

const [ n, k ] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number).sort((a, b) => a - b);
console.log(arr[k - 1]);

// N의 범위 5,000,000개 > 시간 복잡도 n^2의 알고리즘은 시간 초과됨
// 메모리 : 565664KB, 시간 : 4620ms