// https://www.acmicpc.net/problem/1240 (노드사이의 거리)

/*
const input = require('fs').readFileSync(0, 'utf-8')
    .toString().trim().split('\n').map(str => str.trim().split(/\s/).map(Number));
*/

const input = `4 2
2 1 2
4 3 2
1 4 3
1 2
3 2`.trim().split('\n').map(str => str.trim().split(/\s/).map(Number));

const [ [ n, m ], ...nodes ] = input;

const graph = nodes
    .splice(0, n - 1)
    .reduce((graph, [ x, y, cost ]) => {
        !!graph[x] ? (graph[x].push([ y, cost ])) : (graph[x] = [[ y, cost ]]);
        !!graph[y] ? (graph[y].push([ x, cost ])) : (graph[y] = [[ x, cost ]]);
        return graph;
    }, {});

nodes.forEach(([ start, end ]) => {
    const distance = new Array(n + 1).fill(-1);
    const dfs = (node, dist, visited = new Set()) => {
        if (visited.has(node)) return;
        visited.add(node);
        distance[node] = dist;
        graph[node]?.forEach(([ y, cost ]) => {
            dfs(y, dist + cost, visited);
        });
    }
    dfs(start, 0);
    console.log(distance[end]);
});
