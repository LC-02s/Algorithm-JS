// https://www.acmicpc.net/problem/15686 (치킨 배달)

/*
const input = require('fs').readFileSync(0, 'utf-8')
    .toString().trim().split('\n').map(str => str.trim().split(/\s/).map(Number));
*/

const input = `5 3
0 0 1 0 0
0 0 2 0 1
0 1 2 0 0
0 0 1 0 0
0 0 0 0 2`.trim().split('\n').map(str => str.trim().split(/\s/).map(Number));

const [ [ n, m ], ...graph ] = input;

const chicken = [];
const house = [];
for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
        if (graph[i][j] === 1) house.push([ i, j ]);
        if (graph[i][j] === 2) chicken.push([ i, j ]);
    }
}

const visited = new Array(chicken.length).fill(false);
const selected = [];

let answer = 1e9;
const dfs = (depth, start) => {
    if (depth === m) {
        const result = selected.map((i) => chicken[i]);
        let sumOfDist = 0;
        for (const [ hx, hy ] of house) {
            const minDist = result.reduce((min, [ cx, cy ]) => {
                return Math.min(min, Math.abs(hx - cx) + Math.abs(hy - cy));
            }, 1e9);
            sumOfDist += minDist;
        }
        answer = Math.min(answer, sumOfDist);
        return;
    }
    for (let i = start; i < chicken.length; i += 1) {
        if (visited[i]) continue;
        selected.push(i);
        visited[i] = true;
        dfs(depth + 1, i + 1);
        selected.pop();
        visited[i] = false;
    }
}
dfs(0, 0);

console.log(answer);