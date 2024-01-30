class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    insert(value) {
      this.heap.push(value);
      this.bubbleUp();
    }
  
    bubbleUp() {
      let index = this.heap.length - 1;
  
      while (index > 0) {
        const element = this.heap[index];
        const parentIndex = Math.floor((index - 1) / 2);
        const parent = this.heap[parentIndex];
  
        if (parent <= element) break;
  
        // 부모 노드와 자식 노드 변경
        this.heap[index] = parent;
        this.heap[parentIndex] = element;
  
        index = parentIndex;
      }
    }
  
    extractMin() {
      const min = this.heap[0];
      const end = this.heap.pop();
  
      if (this.heap.length > 0) {
        this.heap[0] = end;
        this.bubbleDown();
      }
  
      return min;
    }
  
    bubbleDown() {
      let index = 0;
  
      while (true) {
        const leftChildIdx = 2 * index + 1;
        const rightChildIdx = 2 * index + 2;
        let leftChild, rightChild;
        let swap = null;
  
        if (leftChildIdx < this.heap.length) {
          leftChild = this.heap[leftChildIdx];
          if (leftChild < this.heap[index]) {
            swap = leftChildIdx;
          }
        }
  
        if (rightChildIdx < this.heap.length) {
          rightChild = this.heap[rightChildIdx];
          if (
            (swap === null && rightChild < this.heap[index]) ||
            (swap !== null && rightChild < leftChild)
          ) {
            swap = rightChildIdx;
          }
        }
  
        if (swap === null) break;
  
        // 현재 요소를 더 작은 요소로 바꿈
        this.heap[index] = this.heap[swap];
        this.heap[swap] = this.heap[index];
  
        index = swap;
      }
    }
  }
  
  // 예제 사용법
  const minHeap = new MinHeap();
  minHeap.insert(5);
  minHeap.insert(3);
  minHeap.insert(7);
  minHeap.insert(2);
  
  console.log(minHeap.heap); // [2, 3, 7, 5]
  
  console.log(minHeap.extractMin()); // 2
  console.log(minHeap.heap); // [3, 5, 7]