// https://www.acmicpc.net/problem/2164 (카드 2)

/*
const n = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
*/

const n = 6;

const cards = Array.from({ length: n }, (_, i) => i + 1);

let head = 0;
let tail = n - 1;

while (head < tail) {
    head += 1;
    tail += 1;
    cards[tail] = cards[head];
    head += 1;
}

console.log(cards[head]);