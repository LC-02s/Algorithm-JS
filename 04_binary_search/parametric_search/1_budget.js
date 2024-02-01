// https://acmicpc.net/problem/2512 (예산)

/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = `4
120 110 140 150
485`.trim().split('\n');

const [ strN, arrStr, strM ] = input;
const [ n, m ] = [ strN, strM ].map(Number);
const requiredBudget = arrStr.split(' ').map(Number); // 각 지방의 예산 요청

let start = 1; // 시작점
let end = requiredBudget.reduce((a, b) => Math.max(a, b)); // 끝점
let result = 0; // 상한액

while (start <= end) { // 이진 탐색 수행
    const mid = parseInt((start + end) / 2); // 현재의 중간점 (상한액)
    let totalBudget = 0; // 배정된 예산의 총액 계산
    requiredBudget.forEach((budget) => totalBudget += Math.min(mid, budget)); // 예산 배정
    if (totalBudget <= m) {
        // 조건을 만족한다면, 상한액(최대화가 목표)을 증가 시킴
        result = mid;
        start = mid + 1;
    } else {
        // 조건을 만족하지 못한다면, 상한액(최대화가 목표)을 감소 시킴
        end = mid - 1
    }
}
console.log(result);