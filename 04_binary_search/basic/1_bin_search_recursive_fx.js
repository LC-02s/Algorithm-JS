// 이진 탐색 구현 소스코드 (재귀 함수)
function binarySearch(arr, target, start = 0, end = arr.length - 1) {
    // arr 매개변수는 정렬되어 있다고 가정함
    if (start > end) return -1;
    
    const mid = parseInt((start + end) / 2);
    if (arr[mid] == target) return mid;

    // 중간점의 값보다 찾고자 하는 값이 작은 경우 왼쪽, 큰 경우 오른쪽 확인
    const targetRange = arr[mid] > target ? [start, mid - 1] : [mid + 1, end];
    return binarySearch(arr, target, ...targetRange);
}

// 사용 예제
const target = 7;
const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

const result = binarySearch(arr, target);
console.log(result); // 3