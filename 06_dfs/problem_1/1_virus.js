// https://www.acmicpc.net/problem/2606 (바이러스)

/*
const input = require('fs').readFileSync(0, 'utf-8')
    .toString().trim().split('\n').map(str => str.trim().split(/\s/).map(Number));
*/

const input = `7
6
1 2
2 3
1 5
5 2
5 6
4 7`.trim().split('\n').map(str => str.trim().split(/\s/).map(Number));

const [ ,, ...computers ] = input;

const networks = computers
    .reduce((obj, [ a, b ]) => {
        obj[a] = obj[a] ? [...obj[a], b] : [b];
        obj[b] = obj[b] ? [...obj[b], a] : [a];
        return obj;
    }, {});

let cnt = 0;
const dfs = (graph, node, visited = new Set()) => {
    if (visited.has(node)) return;
    visited.add(node);
    cnt += 1;
    graph[node]?.forEach((v) => {
        dfs(graph, v, visited);
    });
}
dfs(networks, 1);

console.log(cnt - 1); // 1번 컴퓨터를 통해 웜 바이러스에 걸리게 되는 컴퓨터의 수