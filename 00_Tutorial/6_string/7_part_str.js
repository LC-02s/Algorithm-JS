// https://school.programmers.co.kr/learn/courses/30/lessons/147355 (크기가 작은 부분 문자열)

function solution(t, p) {
    return new Array(t.length - p.length + 1).fill('')
        .map((_, idx) => t.slice(idx, idx + p.length))
        .filter(el => p >= el).length;
}

console.log(solution('3141592', '271')); // 2
console.log(solution('500220839878', '7')); // 8
console.log(solution('10203', '15')); // 3