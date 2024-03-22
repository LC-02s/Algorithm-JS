// https://www.acmicpc.net/problem/2961 (도영이가 만든 맛있는 음식)

/*
const input = require('fs').readFileSync(0, 'utf-8')
    .toString().trim().split('\n').map(str => str.trim().split(/\s/).map(Number));
*/

const input = `4
1 7
2 6
3 8
4 9`.trim().split('\n').map(str => str.trim().split(/\s/).map(Number));

const [ [ n ], ...foods ] = input;
const visited = new Array(n).fill(false);
const result = [];
let answer = Infinity;

function dfs(depth, start) {
    if (depth >= 1) {
        const [ totalX, totalY ] = result
            .reduce(([ totalX, totalY ], i) => {
                const [ x, y ] = foods[i];
                return [ totalX * x, totalY + y ];
            }, [ 1, 0 ]);
        answer = Math.min(answer, Math.abs(totalX - totalY));
    }
    for (let i = start; i < n; i += 1) {
        if (visited[i]) continue;
        visited[i] = true;
        result.push(i);
        dfs(depth + 1, i + 1);
        visited[i] = false;
        result.pop();
    }
}
dfs(0, 0);
console.log(answer);