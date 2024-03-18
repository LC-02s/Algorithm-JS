// https://www.acmicpc.net/problem/9663 (N-Queen)

/*
const n = Number(require('fs').readFileSync(0, 'utf-8').toString().trim());
*/

const n = 8; // 전체 맵의 크기
const queens = []; // 현재 체스판에 놓인 퀸의 위치 정보

function isPossible(x, y) {
	// (x, y) 위치에 퀸을 놓을 수 있는지 확인
	for (const [ a, b ] of queens) {
		if (a === x || b === y) return false; // 행이나 열이 같은 경우
		if (Math.abs(a - x) === Math.abs(b - y)) return false; // 대각선에 위치한 경우
	}
	return true;
}

let cnt = 0;
function dfs(row) {
	if (row === n) cnt += 1; // 퀸을 N개 배치할 수 있는 경우 카운트
	for (let i = 0; i < n; i += 1) {
		if (!isPossible(row, i)) continue; // 현재 위치에 놓을 수 없다면 무시
		queens.push([row, i]); // 현재 위치에 퀸을 놓음
		dfs(row + 1); // 재귀 함수 호출
		queens.pop(); // 현재 위치에서 퀸 제거
	}
}
dfs(0);
console.log(cnt);