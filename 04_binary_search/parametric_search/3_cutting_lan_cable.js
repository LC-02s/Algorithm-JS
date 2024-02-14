// https://www.acmicpc.net/problem/1654 (랜선 자르기)

/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = `4 11
802
743
457
539`.split('\n');

const [ strCondition, ...strCables ] = input;
// 가지고 있는 랜선 개수 (K), 필요한 랜선 개수 (N)
const [ k, n ] = strCondition.split(' ').map(Number);
const cables = strCables.map(Number);

let start = 1;
let end = Math.max(...cables);

let unit = 0;
while (start <= end) {
    const mid = parseInt((start + end) / 2); // 중간점 (랜선을 자를 단위)
    const expectedCount = cables.reduce((count, cable) => {
        return count + parseInt(cable / mid); 
    }, 0); // 랜선을 모두 단위로 잘랐을 때 몇 개가 나오는지
    if (expectedCount < n) { end = mid - 1 } // 만들 수 있는 랜선의 개수가 부족한 경우 (단위 줄임)
    else { unit = mid; start = mid + 1 } // 만들 수 있는 랜선의 개수가 충분한 경우 (단위 늘임)
}

console.log(unit);