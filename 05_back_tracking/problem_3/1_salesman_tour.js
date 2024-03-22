// https://www.acmicpc.net/problem/10971 (외판원 순회 2)

/*
const input = require('fs').readFileSync(0, 'utf-8')
    .toString().trim().split('\n').map(str => str.trim().split(/\s/).map(Number));
*/

const input = `4
0 10 15 20
5 0 9 10
6 13 0 12
8 8 9 0`.trim().split('\n').map(str => str.trim().split(/\s/).map(Number));

const [ [ n ], ...cities ] = input;
const visited = new Array(11).fill(false);
const result = []; // 순열 정보 배열
let minValue = 1e9;

// 2부터 N까지의 수를 하나씩 골라 나열하는 모든 순열을 계산
function dfs(depth) {
    if (depth === n - 1) {
        // 현재 순열에 대한 처리
        let totalCost = 0; 
        let curNode = 0; // 0(1)번 노드에서 출발
        for (const nextNode of result) {
            let cost = cities[curNode][nextNode];
            if (!cost) return; // 이동 불가능하면 무시
            totalCost += cost;
            curNode = nextNode;
        }
        // 마지막 노드에서 0(1)로 돌아옴 (필수)
        let cost = cities[curNode][0];
        if (!cost) return; // 이동 불가능하면 무시
        totalCost += cost;
        minValue = Math.min(minValue, totalCost);
    }
    for (let i = 1; i < n; i += 1) {
        if (visited[i]) continue;
        result.push(i);
        visited[i] = true;
        dfs(depth + 1);
        result.pop();
        visited[i] = false;
    }
}
dfs(0);
console.log(minValue);