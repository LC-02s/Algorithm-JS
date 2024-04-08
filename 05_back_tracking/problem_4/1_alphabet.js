// https://www.acmicpc.net/problem/1987 (알파벳)

/*
const input = require('fs').readFileSync(0, 'utf-8')
    .toString().trim().split('\n');
*/

const input = `5 5
IEFCJ
FHFKC
FFALF
HFGCF
HMCHH`.trim().split('\n');

const [ r, c ] = input[0].split(' ').map(Number);
const alphabets = new Array(r);
for (let i = 1; i <= r; i += 1) alphabets[i - 1] = input[i].trim().split('');

const dx = [ -1, 1,  0, 0 ];
const dy = [  0, 0, -1, 1 ];
const visited = new Array(26).fill(false);

let maxDepth = 0; // 최대 깊이
function dfs(depth, x, y) {
    maxDepth = Math.max(maxDepth, depth);
    for (let i = 0; i < 4; i += 1) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (nx < 0 || nx >= r || ny < 0 || ny >= c) continue;
        if (!visited[alphabets[nx][ny].charCodeAt() - 65]) {
            visited[alphabets[nx][ny].charCodeAt() - 65] = true;
            dfs(depth + 1, nx, ny);
            visited[alphabets[nx][ny].charCodeAt() - 65] = false;
        }
    }
}

visited[alphabets[0][0].charCodeAt() - 65] = true;
dfs(1, 0, 0);

console.log(maxDepth);