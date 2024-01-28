// 이진 탐색 구현 소스코드 (반복문, 프로토타입)
Array.prototype.searchIndex = function(target, start = 0, end = arr.length - 1) {
    // arr는 정렬되어 있다고 가정함
    const arr = [ ...this ];
    while (start <= end) {
        const mid = parseInt((start + end) / 2);
        if (arr[mid] == target) return mid;
        // 중간점의 값보다 찾고자 하는 값이 작은 경우 왼쪽, 큰 경우 오른쪽 확인
        else if (arr[mid] > target) end = mid - 1;
        else start = mid + 1;
    }
    return -1;
}

// 사용 예제
const target = 7;
const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

const result = arr.searchIndex(target);
console.log(result); // 3