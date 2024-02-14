// https://www.acmicpc.net/problem/7568 (덩치)

/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = `5
55 185
58 183
88 186
60 175
46 155`.split('\n');

const [ n, ...personStrArr ] = input;
const personArr = personStrArr.map((str) => str.trim().split(' ').map(Number));

const rating = personArr
    .map(([ targetKG, targetCM ], _idx, src) => src
    .filter(([ KG, CM ]) => KG > targetKG && CM > targetCM).length + 1)
    .join(' ');

console.log(rating);

/*
// 명령형 로직
let result = '';
for (let i = 0; i < personArr.length; i += 1) {
    const targetKG = personArr[i][0];
    const targetCM = personArr[i][1];
    let cnt = 0;
    for (let j = 0; j < personArr.length; j += 1) {
        const KG = personArr[j][0];
        const CM = personArr[j][1];
        if (KG > targetKG && CM > targetCM) cnt += 1;
    }
    result += (cnt + 1) + ' ';
}
console.log(result);
*/

