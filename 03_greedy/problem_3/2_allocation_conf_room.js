// https://www.acmicpc.net/problem/1931 (회의실 배정)

/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/
const input = `11
1 4
3 5
0 6
5 7
3 8
5 9
6 10
8 11
8 12
2 13
12 14`.trim().split('\n');

const [ n, ...scheduleStr ] = input;

// 1. 종료 시점 2. 시작 시점을 기준으로 오름차순 정렬 수행
const schedules = scheduleStr
    .map(str => str.split(' ').map(Number))
    .sort(([ startA, endA ], [ startB, endB ]) => {
        return endA !== endB ? endA - endB : startA - startB;
    });

const result = schedules
    .reduce(([ cnt, targetIdx ], [ curStart, _end ], idx, src) => {
        if (idx == 0) return [ cnt, targetIdx ];
        // 현재 회의가 끝난 이후에 회의가 시작되는 경우 카운트
        if (src[targetIdx][1] <= curStart) return [ cnt + 1, idx ];
        return [ cnt, targetIdx ];
    }, [1, 0]);

console.log(result[0]);

/*
// 위 로직 명령형으로 변경한 코드
let cnt = 1, targetIdx = 0;
for (let i = 1; i < Number(n); i += 1) {
    if (schedules[targetIdx][1] <= schedules[i][0]) {
        targetIdx = i;
        cnt += 1;
    }
}
console.log(cnt);
*/

