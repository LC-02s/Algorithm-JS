// https://www.acmicpc.net/problem/1012 (유기농 배추)

/*
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(str => str.trim());
*/

class Queue {
    constructor() {
        this.items = {};
        this.headIndex = 0;
        this.tailIndex = 0;
    }
    enq(item) {
        this.items[this.tailIndex] = item;
        this.tailIndex += 1;
    }
    deq() {
        const item = this.items[this.headIndex];
        delete this.items[this.headIndex];
        this.headIndex += 1;
        return item;
    }
    peek() {
        return this.items[this.headIndex];
    }
    getLength() {
        return this.tailIndex - this.headIndex;
    }
}

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
5 5`.trim().split('\n').map(str => str.trim());

const [ t, ...strTestCase ] = input;
const testCase = strTestCase.map(str => str.split(' ').map(Number));
const cover = [ [ 0, -1 ], [ 0, 1 ], [ -1, 0 ], [ 1, 0 ] ];

let i = 0;
while (i < +t) {
    const [ m, n, k ] = testCase[i];

    const coveredArea = Array.from(Array(n), () => new Array(m).fill(false));
    const queue = new Queue();

    const farm = Array.from(Array(n), () => new Array(m).fill(0));
    const cabbages = testCase.splice(i + 1, k);
    cabbages.forEach(([ x, y ]) => { farm[y][x] = 1 });

    let count = 0;
    farm.forEach((y, farmY) => { y.forEach((isCabbage, farmX) => {
        if (isCabbage === 1 && !coveredArea[farmY][farmX]) {
            count += 1;
            coveredArea[farmY][farmX] = true;
            queue.enq([ farmX, farmY ]);
            while(queue.getLength() !== 0) {
                const [ currentX, currentY ] = queue.deq();
                const targetArea = cover.map(([ coverX, coverY ]) => [ coverX + currentX, coverY + currentY ]);
                targetArea.forEach(([ targetX, targetY ]) => {
                    if (targetX < 0 || targetX >= m || targetY < 0 || targetY >= n) return;
                    if (farm[targetY][targetX] === 1 && !coveredArea[targetY][targetX]) {
                        coveredArea[targetY][targetX] = true;
                        queue.enq([ targetX, targetY ]);
                    }
                });
            }
        }
    }); });

    console.log(count);
    i += 1;
}

