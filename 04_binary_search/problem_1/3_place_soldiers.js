// https://www.acmicpc.net/problem/18353 (병사 배치하기)

/*
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = `7
15 11 4 8 5 2 4`.trim().split('\n');

const [ [ n ], soldiers ] = input.map(str => str.trim().split(' ').map(Number));

const lowerBound = (arr, target, start = 0, end = arr.length) => {
    while (start < end) {
        const mid = parseInt((start + end) / 2);
        if (arr[mid] >= target) end = mid;
        else start = mid + 1;
    }
    return end;
}

const lis = [0];
soldiers.reverse().forEach((soldier) => {
    if (lis[lis.length - 1] < soldier) lis.push(soldier);
    else lis[lowerBound(lis, soldier)] = soldier;
});

console.log(n - (lis.length - 1));