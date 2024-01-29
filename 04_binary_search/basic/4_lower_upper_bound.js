// 정렬된 순서를 유지하면서 배열에 삽입할 가장 왼쪽 인덱스 반환
function lowerBound(arr, target, startParam, endParam) {
    let start =  startParam ?? 0;
    let end = endParam ?? arr.length;
    while (start < end) {
        const mid = parseInt((start + end) / 2);
        if (arr[mid] >= target) end = mid; // 최대한 왼쪽으로 이동
        else start = mid + 1;
    }
    return end;
}

// 정렬된 순서를 유지하면서 배열에 삽입할 가장 오른쪽 인덱스 반환
function upperBound(arr, target, startParam, endParam) {
    let start =  startParam ?? 0;
    let end = endParam ?? arr.length;
    while (start < end) {
        const mid = parseInt((start + end) / 2);
        if (arr[mid] > target) end = mid; // 최대한 오른쪽으로 이동
        else start = mid + 1;
    }
    return end;
}

const arr1 = [3, 4, 5, 5, 5, 7, 9];
console.log(lowerBound(arr1, 5)); // 2
console.log(upperBound(arr1, 5)); // 5

// 값이 [ leftValue, rightValue ] 사이인 데이터의 개수를 반환하는 함수
function countByRange(arr, leftValue, rightValue) {
    // 유의 : lowerBound와 upperBound는 end 변수의 값을 배열의 길이로 설정
    const rightIndex = upperBound(arr, rightValue);
    const leftIndex = lowerBound(arr, leftValue);
    return rightIndex - leftIndex;
}

const arr2 = [1, 2, 3, 3, 3, 3, 4, 4, 8, 9];
console.log(countByRange(arr2, 4, 9)); // 4
console.log(countByRange(arr2, -1, 3)); // 6