// https://www.acmicpc.net/problem/11509 (풍선 맞추기)

/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

// 0 | 5 | 0 | 0 | 0 |
// 4 | 0 | 0 | 0 | 4 |
// 0 | 0 | 2 | 0 | 0 |
// 0 | 0 | 0 | 1 | 0 |

const input = `5
4 5 2 1 4`.trim().split('\n');

const targetBalloons = input[1].split(' ').map(Number);

const arrowArr = new Array(1000001).fill(0);

const countArrow = targetBalloons
    .reduce((cnt, curHeight) => {
        if (arrowArr[curHeight] > 0) {
            arrowArr[curHeight] -= 1;
            arrowArr[curHeight - 1] += 1;
            return cnt;
        } else {
            arrowArr[curHeight - 1] += 1;
            return cnt + 1;
        }
    }, 0);

console.log(countArrow);

// (81956KB, 452ms)

/*
// 위 로직 명령형으로 작성한 코드 (103468KB, 544ms)
let countArrow = 0;
for (const curHeight of targetBalloons) {
    if (arrowArr[curHeight] > 0) {
        arrowArr[curHeight] -= 1;
        arrowArr[curHeight - 1] += 1;
    } else {
        arrowArr[curHeight - 1] += 1;
        countArrow += 1;
    }
}
*/