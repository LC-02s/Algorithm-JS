// https://www.acmicpc.net/problem/1325 (효율적인 해킹)

/*
const input = require('fs').readFileSync(0, 'utf-8')
    .toString().trim().split('\n').map(str => str.split(' ').map(Number));
*/

const input = `5 4
3 1
3 2
4 3
5 3`.trim().split('\n').map(str => str.split(' ').map(Number));

const [ n, m ] = input[0];
const graph = Array.from({ length: n + 1 }, () => []);
for (let i = 1; i <= m; i += 1) {
    const [ a, b ] = input[i];
    graph[b].push(a);
}

let answer = [];
let max = 0;
function dfs(start) {
    const stack = [ start ];
    const visited = new Array(n + 1).fill(false);
    let count = 0;
    let result = 0;
    while (stack.length) {
        const current = stack.pop();
        if (result < count) result = count;
        visited[current] = true;
        for (let i = 0; i < graph[current].length; i += 1) {
            const node = graph[current][i];
            if (visited[node]) continue;
            visited[node] = true;
            count += 1;
            stack.push(node);
        }
    }
    if (max < result) {
        max = result;
        answer = [ start ];
    } else if (max === result) {
        answer.push(start);
    }
}

for (let i = 1; i <= n; i += 1) dfs(i);

console.log(answer.join(' '));