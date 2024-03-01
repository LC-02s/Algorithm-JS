// https://www.acmicpc.net/problem/7576 (토마토 2차원)

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

const input = `6 4
1 -1 0 0 0 0
0 -1 0 0 0 0
0 0 0 0 -1 0
0 0 0 0 -1 1`.trim().split('\n');

const [ [ m, n ], ...tomatos ] = input.map(str => str.trim().split(' ').map(Number));

const targetPoints = [ [ 0, -1 ], [ 0, 1 ], [ -1, 0 ], [ 1, 0 ] ];

const queue = new Queue();

let unripeTomatosLength = 0;
tomatos.forEach((boxY, tomatoY) => { 
    boxY.forEach((isRiped, tomatoX) => {
        if (isRiped === 1) queue.enq([ tomatoX, tomatoY, 0 ]);
        if (isRiped === 0) unripeTomatosLength += 1;
    }); 
});

if (unripeTomatosLength === 0) return console.log(0);


let day = 0;
while (queue.getLength() !== 0) {
    const [ currentX, currentY, dayCount ] = queue.deq();
    const targetTomatos = targetPoints.map(([ targetX, targetY ]) => [ targetX + currentX, targetY + currentY ]);
    targetTomatos.forEach(([ targetX, targetY ]) => {
        if (targetX < 0 || targetX >= m || targetY < 0 || targetY >= n || tomatos[targetY][targetX] === -1) return;
        if (tomatos[targetY][targetX] === 0) {
            tomatos[targetY][targetX] = 1;
            queue.enq([ targetX, targetY, dayCount + 1 ]);
            unripeTomatosLength -= 1;
            day = Math.max(day, dayCount + 1);
        }
    });
}

console.log(unripeTomatosLength ? -1 : day);