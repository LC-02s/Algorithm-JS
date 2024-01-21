// https://school.programmers.co.kr/learn/courses/30/lessons/118666 (성격 유형 검사하기)
// 2022 KAKAO TECH INTERNSHIP

function solution(survey, choices) {
    const scoreArr = [ 3, 2, 1, 0, 1, 2, 3 ];
    const type = {
        R: 0, T: 0,
        C: 0, F: 0,
        J: 0, M: 0,
        A: 0, N: 0,
    };
    
    // 유형별 점수 취합
    choices.forEach((el, idx) => {
        type[survey[idx][el > 4 ? 1 : 0]] += scoreArr[el - 1];
    });

    // 점수 비교 후 결과 도출
    const result = Object.keys(type)
        .map((el, idx, src) => {
            if ((idx + 1) % 2 == 0) return '';
            else return type[el] >= type[src[idx + 1]] ? el : src[idx + 1];
        })
        .join('');

    return result;
}   

console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5])); // TCMA
console.log(solution(["TR", "RT", "TR"], [7, 1, 3])); // RCJA