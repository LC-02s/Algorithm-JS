// https://www.acmicpc.net/problem/15651 (N과 M (3))

/*
const input = require('fs').readFileSync(0, 'utf-8')
    .toString().trim().split(/\s/).map(Number);
*/

// 1부터 N까지의 자연수 중에서 M개를 고른 수열 구하기
const input = `4 2`.trim().split(/\s/).map(Number);

const [ n, m ] = input;

const intArr = Array.from({ length: n }, (_, i) => i + 1); // 순열을 계산하고자 하는 원소가 담긴 배열
const selected = []; // 현재 순열에 포함된 원소

const answer = [];
const dfs = (arr, depth) => {
    if (depth === m) {
        const result = selected.map((i) => arr[i]).join(' '); // 순열 결과 처리
        answer.push(result);
        return;
    }
    for (let i = 0; i < arr.length; i += 1) {
        selected.push(i); // 현재 원소 선택
        dfs(arr, depth + 1); // 재귀 함수 호출
        selected.pop(); // 현재 원소 선택 취소
    }
}
dfs(intArr, 0);
console.log(answer.join('\n'));