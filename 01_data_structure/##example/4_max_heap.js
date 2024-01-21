class MaxHeap {
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
  
        if (parent >= element) break;
  
        // 부모 노드와 자식 노드 변경
        this.heap[index] = parent;
        this.heap[parentIndex] = element;
  
        index = parentIndex;
      }
    }
  
    extractMax() {
      const max = this.heap[0];
      const end = this.heap.pop();
  
      if (this.heap.length > 0) {
        this.heap[0] = end;
        this.bubbleDown();
      }
  
      return max;
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
          if (leftChild > this.heap[index]) {
            swap = leftChildIdx;
          }
        }
  
        if (rightChildIdx < this.heap.length) {
          rightChild = this.heap[rightChildIdx];
          if (
            (swap === null && rightChild > this.heap[index]) ||
            (swap !== null && rightChild > leftChild)
          ) {
            swap = rightChildIdx;
          }
        }
  
        if (swap === null) break;
  
        // 현재 요소를 더 큰 요소로 바꿈
        this.heap[index] = this.heap[swap];
        this.heap[swap] = this.heap[index];
  
        index = swap;
      }
    }
  }
  
  // 예제 사용법
  const maxHeap = new MaxHeap();
  maxHeap.insert(5);
  maxHeap.insert(3);
  maxHeap.insert(7);
  maxHeap.insert(2);
  
  console.log(maxHeap.heap); // [7, 5, 3, 2]
  
  console.log(maxHeap.extractMax()); // 7
  console.log(maxHeap.heap); // [5, 2, 3]