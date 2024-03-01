// https://www.acmicpc.net/problem/7569 (토마토 3차원)

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

const input = `5 3 2
0 0 0 0 0
0 0 0 0 0
0 0 0 0 0
0 0 0 0 0
0 0 1 0 0
0 0 0 0 0`.trim().split('\n');

const [ [ m, n, h ], ...targetTomatos ] = input.map(str => str.trim().split(' ').map(Number));

const tomatos = new Array(h).fill([]).map(() => targetTomatos.splice(0, n));
const targetPoints = [ 
    [  0,  0, -1 ], 
    [  0,  0,  1 ], 
    [  0, -1,  0 ], 
    [  0,  1,  0 ], 
    [ -1,  0,  0 ], 
    [  1,  0,  0 ] 
];

const queue = new Queue();

let unripeTomatosLength = 0;
tomatos.forEach((arrZ, tomatoZ) => {
    arrZ.forEach((arrY, tomatoY) => {
        arrY.forEach((isRiped, tomatoX) => {
            if (isRiped === 1) queue.enq([ tomatoX, tomatoY, tomatoZ, 0 ]);
            if (isRiped === 0) unripeTomatosLength += 1;
        });
    });
});

if (unripeTomatosLength === 0) return console.log(0);


let day = 0;
while (queue.getLength() !== 0) {
    const [ currentX, currentY, currentZ, dayCount ] = queue.deq();
    const targetTomatos = targetPoints.map(([ targetX, targetY, targetZ ]) => [ targetX + currentX, targetY + currentY, currentZ + targetZ ]);
    targetTomatos.forEach(([ targetX, targetY, targetZ ]) => {
        if (tomatos[targetZ]?.[targetY]?.[targetX] === 0) {
            tomatos[targetZ][targetY][targetX] = 1;
            queue.enq([ targetX, targetY, targetZ, dayCount + 1 ]);
            unripeTomatosLength -= 1;
            day = Math.max(day, dayCount + 1);
        }
    });
}

console.log(unripeTomatosLength ? -1 : day);