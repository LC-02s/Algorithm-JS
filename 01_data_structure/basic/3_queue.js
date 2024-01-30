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

// 구현된 큐(Queue) 클래스 사용
const queue = new Queue();

// 삽입(5) - 삽입(2) - 삽입(3) - 삽입(7) - 삭제() - 삽입(1) - 삽입(4) - 삭제() 
queue.enqueue(5); // 5
queue.enqueue(2); // 5, 2
queue.enqueue(3); // 5, 2, 3
queue.enqueue(7); // 5, 2, 3, 7
queue.dequeue();  // 2, 3, 7
queue.enqueue(1); // 2, 3, 7, 1
queue.enqueue(4); // 2, 3, 7, 1, 4
queue.dequeue();  // 3, 7, 1, 4

// 먼저 들어온 순서대로 출력
while (queue.getLength() != 0) console.log(queue.dequeue());