// https://www.acmicpc.net/problem/2529 (부등호)

/*
const input = require('fs').readFileSync(0, 'utf-8')
    .toString().trim().split(/\s/);
*/

const input = `9
> < < < > > > < <`.trim().split(/\s/);

const [ strK, ...signs ] = input;
const k = Number(strK);
const visited = new Array(10).fill(false);
const result = [];

let current = '';
let first = '';

function dfs(depth) {
    if (depth === k + 1) {
        let check = true;
        for (let i = 0; i < k; i += 1) {
            if (signs[i] === '<') {
                if (result[i] > result[i + 1]) check = false;
            } else {
                if (result[i] < result[i + 1]) check = false;
            }
        }
        if (check) {
            current = result.reduce((a, b) => a + b, "");
            if (first === '') first = current;
        }
        return;
    }
    for (let i = 0; i < 10; i += 1) {
        if (visited[i]) continue;
        visited[i] = true;
        result.push(i);
        dfs(depth + 1);
        visited[i] = false;
        result.pop();
    }
}

dfs(0);
console.log(current + '\n' + first);