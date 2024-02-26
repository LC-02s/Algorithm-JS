// https://www.acmicpc.net/problem/1697 (숨바꼭질)

/*
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
*/

const input = `5 17`.trim().split(' ').map(Number);

class Queue {
    constructor() {
        this.items = {};
        this.headIndex = 0;
        this.tailIndex = 0;
    }
    enqueue(item) {
        this.items[this.tailIndex] = item;
        this.tailIndex += 1;
    }
    dequeue() {
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

const [ n, k ] = input;
const max = 100001;

const queue = new Queue();
const visited = new Array(max).fill(0);
let time = 0;

queue.enqueue(n);
while (queue.getLength !== 0) {
    const currentPoint = queue.dequeue();
    const childNodes = [ currentPoint - 1, currentPoint + 1, currentPoint * 2 ];
    if (currentPoint === k) { time = visited[currentPoint]; break };
    childNodes.forEach((nextPoint) => {
        if (nextPoint < 0 || nextPoint >= max) return;
        if (visited[nextPoint] === 0) {
            visited[nextPoint] = visited[currentPoint] + 1;
            queue.enqueue(nextPoint);
        }
    });
}

console.log(time);

