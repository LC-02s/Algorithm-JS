/*
function fibo(x) {
	if (x === 1 || x === 2) {
		return 1;
	}
	return fibo(x - 1) + fibo(x - 2); // 점화식
}
console.log(fibo(4)); // 3
*/

const fibos = new Array(100).fill(0);
function fibo(x) {
	if (x === 1 || x === 2) {
		return 1; // 종료 조건
	}
	if (fibos[x] !== 0) {
		return fibos[x]; // 중복 문제 해결
	}
	fibos[x] = fibo(x - 1) + fibo(x - 2); // 점화식
	return fibos[x];
}
// console.log(fibo(99));

fibos[1] = 1;
fibos[2] = 1;

const n = 99;
for (let i = 3; i <= n; i += 1) {
	fibos[i] = fibos[i - 1] + fibos[i - 2];
}

console.log(fibos[n]);