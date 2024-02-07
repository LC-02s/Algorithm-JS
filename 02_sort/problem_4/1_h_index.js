// https://school.programmers.co.kr/learn/courses/30/lessons/42747 (H-Index)

function solution(citations) {
    return citations
        .sort((a, b) => b - a)
        .filter((thesis, idx) => thesis > idx).length;
}

console.log(solution([3, 0, 6, 1, 5]));