// https://www.acmicpc.net/problem/2212 (센서)

/*
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = `10
5
20 3 14 6 7 8 18 10 12 15`.trim().split('\n');

const [ n, k, strPoint ] = input;
const sensors = strPoint.trim().split(' ').map(Number).sort((a, b) => a - b);

const distance = sensors
    .reduce((arr, sensor, idx, src) => idx ? (arr.push(sensor - src[idx - 1]), arr) : arr, [])
    .sort((a, b) => b - a);

const min = distance.slice(+k - 1, +n - 1).reduce((a, b) => a + b, 0);

console.log(min);