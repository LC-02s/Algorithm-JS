// https://www.acmicpc.net/problem/1904 (01타일)

/*
const n = Number(require('fs').readFileSync(0, 'utf-8').toString());
*/

const n = 4;

const dpTable = new Array(1000001).fill(0);
dpTable[1] = 1;
dpTable[2] = 2;

// DP 진행 (바텀업)
for (let i = 3; i <= n; i += 1) {
    dpTable[i] = (dpTable[i - 1] + dpTable[i - 2]) % 15746;
    // 값이 매우 커질 수 있기 때문에 나머지를 구함, 더할 때마다 나머지만 저장하면 됨
    // ex) (40 + 25 + 15) % 7 = ((40 % 7 + 25) & 7 + 15) % 7
}

console.log(dpTable[n]);