// https://www.acmicpc.net/problem/15649 (N 과 M)

/*
const input = require('fs').readFileSync(0, 'utf-8')
    .toString().trim().split(/\s/).map(Number);
*/

// 1부터 N까지의 자연수 중에서 중복 없이 M개를 고른 수열 구하기
const input = `4 2`.trim().split(/\s/).map(Number);

const [ n, m ] = input;

const intArr = Array.from({ length: n }, (_, i) => i + 1); // 순열을 계산하고자 하는 원소가 담긴 배열
const visited = new Array(n).fill(false); // 각 원소 인덱스별 방문 여부
const selected = []; // 현재 순열에 포함된 원소

const answer = [];
const dfs = (arr, depth) => {
    if (depth === m) {
        const result = selected.map((i) => arr[i]).join(' '); // 순열 결과 처리
        answer.push(result);
        return;
    }
    for (let i = 0; i < arr.length; i += 1) {
        if (visited[i]) continue; // 이미 처리된 원소라면 무시
        selected.push(i); // 현재 원소 선택
        visited[i] = true; // 현재 원소 방문 처리
        dfs(arr, depth + 1); // 재귀 함수 호출
        selected.pop(); // 현재 원소 선택 취소
        visited[i] = false; // 현재 원소 방문 처리 취소
    }
}
dfs(intArr, 0);
console.log(answer.join('\n'));