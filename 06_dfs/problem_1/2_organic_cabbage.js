// https://www.acmicpc.net/problem/1012 (유기농 배추)

/*
const input = require('fs').readFileSync(0, 'utf-8')
    .toString().trim().split('\n').map(str => str.trim().split(/\s/).map(Number));
*/

const input = `2
10 8 17
0 0
1 0
1 1
4 2
4 3
4 5
2 4
3 4
7 4
8 4
9 4
7 5
8 5
9 5
7 6
8 6
9 6
10 10 1
5 5`.trim().split('\n').map(str => str.trim().split(/\s/).map(Number));

const [ [t], ...testCase ] = input;
const cover = [ [ 0, -1 ], [ 0, 1 ], [ -1, 0 ], [ 1, 0 ] ];

for (let i = 0; i < t; i += 1) {
    const [ m, n, k ] = testCase[0];
    const [ , ...points ] = testCase.splice(0, k + 1);

    const farm = Array.from({ length: n }, () => new Array(m).fill(0));
    points.forEach(([ x, y ]) => farm[y][x] = 1);

    const dfs = (x, y) => {
        if (x <= -1 || x >= m || y <= -1 || y >= n) return false;
        if (farm[y][x] === 1) {
            farm[y][x] = -1;
            cover.forEach(([cx, cy]) => {
                dfs(x + cx, y + cy);
            });
            return true;
        }
        return false;
    }

    let cnt = 0;
    farm.forEach((farmY, y) => {
        farmY.forEach((_, x) => {
            if (dfs(x, y)) cnt += 1;
        });
    })
    console.log(cnt);
}