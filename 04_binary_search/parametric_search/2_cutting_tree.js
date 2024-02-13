// https://www.acmicpc.net/problem/2805 (나무 자르기)

/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = `4 7
20 15 10 17`.split('\n');

// 나무의 수(N) | 가져갈 나무의 길이 (M) | 각 나무의 높이
const [ [ n, m ], trees ] = input.map(str => str.trim().split(' ').map(Number));

let start = 0; // 시작점 (가장 낮은 높이의 나무)
let end = Math.max(...trees); // 끝점 (가장 높은 높이의 나무)

let height = 0;
while (start <= end) {
    const mid = parseInt((start + end) / 2); // 중간점 (나무 높이의 중간 값)
    // 중간 값으로 나무를 전부 잘랐을 때 얻을 수 있는 나무의 양 계산
    const expectedAmount = trees.reduce((amount, tree) => {
        return tree > mid ? amount + tree - mid : amount;
    }, 0);
    if (expectedAmount < m) { end = mid - 1; } // 나무의 양이 부족한 경우 (기계 높이 감소)
    else { height = mid; start = mid + 1; } // 나무의 양이 충분한 경우 (기계 높이 증가)
}

console.log(height);