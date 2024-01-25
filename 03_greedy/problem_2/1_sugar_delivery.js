// https://www.acmicpc.net/problem/2839 (설탕 배달)

/*
const fs = require('fs');
let n = Number(fs.readFileSync('/dev/stdin').toString().trim());
*/

/*
let n = 11;
let cnt = 0;
let flag = false;

while (n >= 0) {
    if (n === 0 || n % 5 === 0) {
        cnt += parseInt(n / 5);
        console.log(cnt);
        flag = true;
        break;
    }
    n -= 3;
    cnt += 1;
}
if (!flag) console.log(-1);
*/

const n = 11;

function calcDelivery(n) {
    const deliverySteps = (n, cnt) => {
        if (n === 0 || n % 5 === 0) {
            return cnt + parseInt(n / 5);
        }
        if (n < 0) return undefined;
        return deliverySteps(n - 3, cnt + 1);
    };

    return deliverySteps(n, 0) ?? -1;
}

const result = calcDelivery(n);
console.log(result);