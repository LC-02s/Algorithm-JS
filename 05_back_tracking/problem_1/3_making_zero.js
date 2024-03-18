// https://www.acmicpc.net/problem/7490 (0만들기)

/*
const input = require('fs').readFileSync(0, 'utf-8')
    .toString().trim().split(/\s/).map(Number);
*/

const input = `2
3
7`.trim().split(/\s/).map(Number);

const [ n, ...testCase ] = input;
const operators = [' ', '+', '-'];

const result = testCase.forEach((n) => {
    const arr = Array.from({ length: n }, (_, i) => i + 1);
    function dfs(result, depth) {
        if (depth === n - 1) {
            let str = '';
            for (let i = 0; i < n - 1; i += 1) str += arr[i] + result[i];
            str += arr[n - 1] + '';
            current = eval(str.replaceAll(' ', ''));
            if (current === 0) console.log(str);
            return;
        }
        operators.forEach((operator) => {
            result.push(operator);
            dfs(result, depth + 1);
            result.pop();
        });
    }
    dfs([], 0);
    console.log();
});