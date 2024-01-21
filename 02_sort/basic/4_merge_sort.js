// 병합(merge) 수행 함수
function merge(arr, left, mid, right) {
    const i = left;
    const j = mid + 1;
    const k = left; // 결과 배열의 인덱스
    while (i <= mid && j <= right) {
        if (arr[i] <= arr[j]) sorted[k += 1] = arr[i += 1];
        else sorted[k += 1] = arr[j += 1];
    }
    // 왼쪽 배열에 대한 처리가 다 끝난 경우
    if (i > mid) {
        for (; j<= right; j += 1) sorted[k += 1] = arr[j];
    }
    // 오른쪽 배열에 대한 처리가 다 끝난 경우
    else {
        for (; i <= mid; i += 1) sorted[k += 1] = arr[i];
    }
    // 정렬된 배열 결과를 원본 배열에 반영하기
    for (let x = left; x <= right; x += 1) {
        arr[x] = sorted[x];
    }
}

// 병합 정렬 (merge sort) 함수
function mergeSort(arr, left, right) {
    // 원소가 1개인 경우, 해당 배열은 정렬이 된 상태로 이해 가능
    if (left < right) {
        // 원소가 2개 이상이라면
        const mid = parseInt((left + right) / 2); // 2개의 부분 배열로 분할 (divide)
        mergeSort(arr, left, mid); // 왼쪽 부분 배열 정렬 수행 (conquer)
        mergeSort(arr, mid + 1, right); // 오른쪽 부분 배열 정렬 수행 (conquer)
        merge(arr, left, mid, right); // 정렬된 2개의 배열을 하나로 병합 (combine)
    }
}



/* 1) 병합 정렬의 수행시간 측정 */
// 0부터 999까지의 정수 100,000개를 담은 배열 생성
const arr1 = Array.from({ length: 100000 }, () => Math.floor(Math.random() * 1000));

// getTime() : 1970-01-01 부터의 시간차를 ms 단위로 계산
const startTime1 = new Date().getTime();
mergeSort(arr1);
const endTime1 = new Date().getTime();

// 시간차 출력
console.log(`병합 정렬 소요 시간 1 : ${endTime1 - startTime1}ms`);



/* 2) 이미 정렬된 배열에 대한 선택 정렬의 수행시간 측정 */
// 0부터 999까지의 정수 100,000개를 담은 배열 생성
const arr2 = Array.from({ length: 100000 }, () => 7);

// getTime() : 1970-01-01 부터의 시간차를 ms 단위로 계산
const startTime2 = new Date().getTime();
mergeSort(arr2);
const endTime2 = new Date().getTime();

// 시간차 출력
console.log(`병합 정렬 소요 시간 2 : ${endTime2 - startTime2}ms`);