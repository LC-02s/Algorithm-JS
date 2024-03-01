// https://www.acmicpc.net/problem/2644 (촌 수 계산)

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

const input = `9
8 6
7
1 2
1 3
2 7
2 8
2 9
4 5
4 6`.trim().split('\n');

const [ [ n ], [ targetA, targetB ], [ m ], ...relationships ] = input.map(str => str.trim().split(' ').map(Number));

const graph = relationships.reduce(
    (arr, [ parent, child ]) => (arr[parent].push(child), arr[child].push(parent), arr), 
    Array.from({ length: n + 1 }, () => [])
);
const visited = new Array(graph.length).fill(0);
const queue = new Queue();

let count = 0;

queue.enq(targetA);
while (queue.getLength() !== 0) {
    const currentPerson = queue.deq();
    if (currentPerson === targetB) { count = visited[currentPerson]; break };
    graph[currentPerson].forEach((nextPerson) => {
        if (visited[nextPerson] <= 0) {
            visited[nextPerson] = visited[currentPerson] + 1;
            queue.enq(nextPerson);
        }
    });
}

console.log(count || -1);