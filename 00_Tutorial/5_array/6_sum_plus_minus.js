// https://school.programmers.co.kr/learn/courses/30/lessons/76501 (음양 더하기)

function solution(absolutes, signs) {
    const result = absolutes
        .map((num, idx) => ([ num, signs[idx] ]))
        .reduce((sum, [num, state]) => {
            return state ? sum + num : sum - num;
		}, 0);
    
    return result;
}

console.log(solution([4, 7, 12], [true, false, true])); // 9
console.log(solution([1, 2, 3], [false, false, true])); // 0