// https://school.programmers.co.kr/learn/courses/30/lessons/42748 (k 번째 수, 프로그래머스)


function solution(array, commands) {
    const answer = commands.map(([start, end, k]) => {
        return array.slice(start - 1, end).sort((a, b) => a - b)[k - 1];
    });

    return answer;
}

console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]])) // [5, 6, 3]