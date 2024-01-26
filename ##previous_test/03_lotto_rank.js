// https://school.programmers.co.kr/learn/courses/30/lessons/77484 (로또의 최고 순위와 최저 순위)
// 2021 Dev-Matching: 웹 백엔드 개발자(상반기)

function solution(lottos, win_nums) {
    const solve = lottos.reduce(([ rank, cnt ], num) => {
        if (!num) return ([ rank, cnt + 1 ]);
        if (win_nums.includes(num)) return ([ rank - 1, cnt ]);
        return ([ rank, cnt ]);
    }, ([ 7, 0 ]));
    
    const [ rank, cnt ] = solve;
    return rank !== 7 ? [ rank - cnt, rank ] : cnt !== 0 ? [ rank-cnt, 6 ] : [ 6, 6 ];
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])); // [ 3, 5 ]
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25])); // [ 1, 6 ]
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35])); // [ 1, 1 ]