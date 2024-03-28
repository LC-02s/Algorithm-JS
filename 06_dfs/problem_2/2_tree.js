// https://www.acmicpc.net/problem/4803 (트리)

/*
const input = require('fs').readFileSync(0, 'utf-8')
    .toString().trim().split('\n').map(str => str.trim().split(/\s/).map(Number));
*/

const input = `6 3
1 2
2 3
3 4
6 5
1 2
2 3
3 4
4 5
5 6
6 6
1 2
2 3
1 3
4 5
5 6
6 4
0 0`.trim().split('\n').map(str => str.trim().split(/\s/).map(Number));

let line = 0;
let testCase = 1;

while (true) {
    const [ n, m ] = input[line];
    if (!n && !m) break;

    const graph = {};
    for (let i = 1; i <= n; i += 1) graph[i] = [];
    for (let i = 1; i <= m; i += 1) {
        const [ x, y ] = input[line + i];
        graph[x].push(y);
        graph[y].push(x);
    }

    const visited = new Array(n + 1).fill(false);

    const isCycle = (node, prevNode) => {
        visited[node] = true;
        for (const nextNode of graph[node]) {
            if (!visited[nextNode]) {
                if (isCycle(nextNode, node)) return true;
            }
            else if (nextNode !== prevNode) return true;
        }
        return false;
    }

    let cnt = 0;
    for (let i = 1; i <= n; i += 1) {
        if (!visited[i]) {
            if (!isCycle(i, 0)) cnt += 1;
        }
    }

    if (cnt === 0) console.log(`Case ${testCase}: No trees.`);
    else if (cnt === 1) console.log(`Case ${testCase}: There is one tree.`);
    else console.log(`Case ${testCase}: A forest of ${cnt} trees.`);

    line += m + 1;
    testCase += 1;
}