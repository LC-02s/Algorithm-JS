// https://www.acmicpc.net/problem/2667 (단지 번호 붙이기)

/*
const input = require('fs').readFileSync(0, 'utf-8')
    .toString().trim().split('\n').map(str => str.trim().split('').map(Number));
*/

const testCase = [
    {
      input: "7\n0110100\n0110101\n1110101\n0000111\n0100000\n0111110\n0111000",
      expect: "3\n7\n8\n9"
    },
    {
      input: "5\n10000\n00000\n00000\n00000\n00000",
      expect: "1\n1"
    },
    {
      input: "5\n00010\n00000\n10000\n00000\n00000",
      expect: "2\n1\n1"
    },
    {
      input: "5\n10101\n01010\n10101\n01010\n10101",
      expect: "13\n1\n1\n1\n1\n1\n1\n1\n1\n1\n1\n1\n1\n1"
    },
    {
      input: "4\n1001\n1100\n0110\n0011",
      expect: "2\n1\n7"
    }
]

function solution(input) {
    const [ [n], ...house ] = input
        .trim().split('\n').map(str => str.trim().split('').map(Number));
    const cover = [ [ 0, -1 ], [ 0, 1 ], [ -1, 0 ], [ 1, 0 ] ];

    const dfs = (x, y) => {
        if (x <= -1 || x >= n || y <= -1 || y >= n) return 0;
        if (house[x][y] >= 1) {
            house[x][y] = -1;
            return cover.reduce((cnt, [ dx, dy ]) => cnt + dfs(x + dx, y + dy), 1);
        }
        return 0;
    }

    const answer = [];
    for (let i = 0; i < n; i += 1) {
        for (let j = 0; j < n; j += 1) {
            const current = dfs(i, j);
            if (current > 0) answer.push(current);
        }
    }

    answer.sort((a, b) => a - b);
    return answer.length + '\n' + answer.join('\n');
    // console.log(answer.length + '\n' + answer.join('\n'));
}

const result = testCase.reduce((result, { input, expect }, i) => {
    const startTime = new Date().getTime();
    const answer = solution(input);
    const endTime = new Date().getTime();

    return result + `test ${i + 1} : ${answer === expect ? '✅ 성공' : '❌ 실패'} (${endTime - startTime}ms)` + '\n';
}, '');

console.log(result);