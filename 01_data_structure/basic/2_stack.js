const stack = [];

// 삽입(5) - 삽입(2) - 삽입(3) - 삽입(7) - 삭제() - 삽입(1) - 삽입(4) - 삭제()
stack.push(5); // [ 5 ]
stack.push(2); // [ 5, 2 ]
stack.push(3); // [ 5, 2, 3 ]
stack.push(7); // [ 5, 2, 3, 7 ]
stack.pop();   // [ 5, 2, 3 ]
stack.push(1); // [ 5, 2, 3, 1 ]
stack.push(4); // [ 5, 2, 3, 1, 4 ]
stack.pop();   // [ 5, 2, 3, 1 ]

const reversed = stack.slice().reverse();
console.log(reversed); // 최상단 원소부터 출력 [ 1, 3, 2, 5 ]
console.log(stack); // [ 5, 2, 3, 1 ]