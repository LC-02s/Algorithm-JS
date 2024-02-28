// https://www.acmicpc.net/problem/7562 (나이트의 이동)

/*
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
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

const input = `3
8
0 0
7 0
100
0 0
30 50
10
1 1
1 1`.trim().split('\n');

const [ t, ...testCase ] = input.map(str => str.trim());
const moving = [
    [ -1, -2 ], [  1, -2 ], 
    [  2, -1 ], [  2,  1 ], 
    [ -1,  2 ], [  1,  2 ], 
    [ -2, -1 ], [ -2,  1 ],
];

for(let i = 0; i < +t; i += 1) {
    const [ width, ...targetCase ] = testCase.splice(0, 3);
    const points = targetCase.map(str => str.split(' ').map(Number));
    const [ targetX, targetY ] = points[1];
    
    const queue = new Queue();
    const visited = Array.from(Array(+width), () => new Array(+width).fill(0));

    const board = Array.from(Array(+width), () => new Array(+width).fill(0));
    points.forEach(([ x, y ]) => { board[y][x] = 1 });

    let count = 0;
    queue.enq(points[0]);
    while (queue.getLength() !== 0) {
        const [ currentX, currentY ] = queue.deq();
        const childNodes = moving.map(([ moveX, moveY ]) => [ currentX + moveX, currentY + moveY ]);

        if (currentX === targetX && currentY === targetY) { count = visited[currentY][currentX]; break };
        childNodes.forEach(([ childX, childY ]) => {
            if (childX < 0 || childX >= +width || childY < 0 || childY >= +width) return;
            if (visited[childY][childX] === 0) {
                visited[childY][childX] = visited[currentY][currentX] + 1;
                queue.enq([ childX, childY ]);
            }
        });
    }

    console.log(count);
}