// https://www.acmicpc.net/problem/13305 (주유소)

/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/
const input = `4
2 3 1
5 2 4 1`.trim().split('\n');

const [ n, distance, cost ] = input.map(str => str.trim().split(' ').map(Number));

// 주유 비용(cost) 배열의 값을 비오름차순이 되도록 변환
let minCost = cost[0];
for (let i = 0; i < n; i += 1) {
    minCost = Math.min(minCost, cost[i]);
    cost[i] = minCost;
}

// 도로당 이동 비용의 합 계산
let result = BigInt(0);
for (let i = 0; i < Number(n) - 1; i += 1) {
    result += BigInt(distance[i]) * BigInt(cost[i]);
}

/*
// 함수형 풀이 - 100점 (37480KB, 344ms)
const result = distance
    .reduce((totalCost, path, idx) => {
        return totalCost + BigInt(path) * BigInt(cost[idx]);
    }, BigInt(0));
*/

console.log(String(result));
// 100점 (36876[39504]KB, 280[336]ms)

/*
// 개인 풀이 (17점)
const [ [ n ], pathArr, priceArr ] = input.map(str => str.trim().split(' ').map(Number));

const targetCost = priceArr
    .map((price, idx, src) => {
        if (idx == 0) return price;
        return Math.min(src[idx - 1], price);
    }); // 이 부분이 문제 있음

const result = pathArr
    .reduce((totalCost, path, idx) => {
        return totalCost + BigInt(path) * BigInt(targetCost[idx]);
    }, BigInt(0));

console.log(String(result));
*/