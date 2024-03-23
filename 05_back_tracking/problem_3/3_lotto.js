// https://www.acmicpc.net/problem/6603 (로또)

/*
const input = require('fs').readFileSync(0, 'utf-8')
    .toString().trim().split('\n').map(str => str.trim().split(/\s/).map(Number));
*/

const input = `7 1 2 3 4 5 6 7
8 1 2 3 5 8 13 21 34
0`.trim().split('\n').map(str => str.trim().split(/\s/).map(Number));

for (const data of input) {
    if (!data[0]) break;
    else {
        const visited = new Array(data[0]).fill(false);
        const answer = [];
        const selected = [];

        function dfs(arr, depth, start) {
            if (depth === 6) {
                const result = selected.map((i) => arr[i]).join(' ');
                answer.push(result);
                return;
            }
            for (let i = start; i < arr.length; i += 1) {
                if (visited[i]) continue;
                selected.push(i);
                visited[i] = true;
                dfs(arr, depth + 1, i + 1);
                selected.pop();
                visited[i] = false;
            }
        }
        dfs(data.slice(1), 0, 0);
        
        console.log(answer.join('\n') + '\n');
    }
}

