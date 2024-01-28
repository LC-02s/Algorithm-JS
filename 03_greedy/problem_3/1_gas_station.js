// https://www.acmicpc.net/problem/13305 (주유소)

/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/
const input = `4
2 3 1
5 2 4 1`.trim().split('\n');

/*
// 권장 풀이 (100점)
const n = Number(input[0]);
let dist = input[1].split(' ').map(Number);
let cost = input[2].split(' ').map(Number);

// 주유 비용(cost) 배열의 값을 비오름차순이 되도록 변환
let minCost = cost[0];
for (let i = 0; i < n; i += 1) {
    minCost = Math.min(minCost, cost[i]);
    cost[i] = minCost;
}

// 도로당 이동 비용의 합 계산
let answer = BigInt(0);
for (let i = 0; i < n - 1; i += 1) {
    answer += BigInt(dist[i]) * BigInt(cost[i]);
}

console.log(String(answer));
*/

// 개인 풀이 (17점)
const [ [ n ], pathArr, priceArr ] = input.map(str => str.trim().split(' ').map(Number));

const targetCost = priceArr
    .map((price, idx, src) => {
        if (idx == 0) return price;
        return Math.min(src[idx - 1], price);
    });

const result = pathArr
    .reduce((totalCost, path, idx) => {
        return totalCost + BigInt(path) * BigInt(targetCost[idx]);
    }, BigInt(0));

console.log(String(result));
