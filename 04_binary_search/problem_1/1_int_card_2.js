// https://www.acmicpc.net/problem/10816 (숫자 카드 2)

/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = `10
6 3 2 10 10 10 -10 -10 7 3
8
10 9 -5 2 3 4 5 -10`.trim().split('\n');

const [ n, strCardN, m, strCardM, ] = input;

/*
// 풀이 1 - 해시 사용 (123944KB / 716ms)
const keepCard = strCardN.trim().split(' ')
    .reduce((map, card) => (map.set(card, map.get(card) + 1 || 1)), new Map());

const targetCard = strCardM.trim().split(' ')
    .map((card) => keepCard.get(card) || 0).join(' ');

console.log(targetCard);
*/


// 풀이 2 - 정렬, 이진탐색 사용
// sort 메서드 사용 O : 154600KB / 1264ms
// sort 메서드 사용 X : 282328KB / 1256ms

const countingSort = (arr) => {
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    // 카운트 배열 초기화
    const countArray = new Array(max - min + 1).fill(0);

    // 각 요소의 빈도수 세기
    for (let i = 0; i < arr.length; i += 1) countArray[arr[i] - min] += 1;

    // 누적 빈도수 계산
    for (let i = 1; i < countArray.length; i += 1) countArray[i] += countArray[i - 1];
    
    // 정렬된 결과를 담을 배열
    const sortedArray = new Array(arr.length);

    // 입력 배열을 순회하며 정렬
    for (let i = arr.length - 1; i >= 0; i -= 1) {
        const value = arr[i];
        const index = countArray[value - min] - 1;
        sortedArray[index] = value;
        countArray[value - min] -= 1;
    }

    return sortedArray;
}

// 배열에서 값이 targetValue인 데이터의 개수를 반환하는 함수
const countingOfValue = (arr, targetValue) => {
    // 정렬된 순서를 유지하면서 배열에 삽입할 가장 왼쪽 인덱스 반환
    const lowerBound = (arr, target, start = 0, end = arr.length) => {
        while (start < end) {
            const mid = parseInt((start + end) / 2);
            if (arr[mid] >= target) end = mid; // 최대한 왼쪽으로 이동
            else start = mid + 1;
        }
        return end;
    }
    // 정렬된 순서를 유지하면서 배열에 삽입할 가장 오른쪽 인덱스 반환
    const upperBound = (arr, target, start = 0, end = arr.length) => {
        while (start < end) {
            const mid = parseInt((start + end) / 2);
            if (arr[mid] > target) end = mid; // 최대한 오른쪽으로 이동 (>)
            else start = mid + 1;
        }
        return end;
    }

    return upperBound(arr, targetValue) - lowerBound(arr, targetValue);
}

const keepCard = strCardN.trim().split(' ').map(Number);
const sortedKeepCard = countingSort(keepCard);

const targetCard = strCardM.trim().split(' ').map(Number)
    .map((card) => countingOfValue(sortedKeepCard, card)).join(' ');

console.log(targetCard);