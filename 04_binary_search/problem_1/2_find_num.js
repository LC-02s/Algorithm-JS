// https://www.acmicpc.net/problem/1920 (수 찾기)

/*
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = `5
4 1 5 2 3
5
1 3 7 9 5`.trim().split('\n');

const [ n, strN, m, strM ] = input;

const binarySearch = (arr, target, start = 0, end = arr.length - 1) => {
    while (start <= end) {
        const mid = parseInt((start + end) / 2);
        if (arr[mid] === target) return mid;
        else if (arr[mid] > target) end = mid - 1;
        else start = mid + 1;
    }
    return -1;
}
const targetNum = strN.split(' ').map(Number).sort((a, b) => a - b);
const included = strM.split(' ').map((num) => binarySearch(targetNum, +num) >= 0 ? 1 : 0);

console.log(included.join('\n'));
