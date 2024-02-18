
function countingSort(arr) {
    const max = Math.max(...arr);

    // 카운트 배열 초기화
    const countArray = new Array(max + 1).fill(0);

    // 각 요소의 빈도수 세기
    for (let i = 0; i < arr.length; i++) countArray[arr[i]]++;

    // 누적 빈도수 계산
    for (let i = 1; i < countArray.length; i++) countArray[i] += countArray[i - 1];

    // 정렬된 결과를 담을 배열
    const sortedArray = new Array(arr.length);

    // 입력 배열을 순회하며 정렬
    for (let i = arr.length - 1; i >= 0; i--) {
        const value = arr[i];
        const index = countArray[value] - 1;
        sortedArray[index] = value;
        countArray[value]--;
    }

    return sortedArray;
}

/* 1) 계수 정렬의 수행시간 측정 */
// 0부터 999까지의 정수 30,000개를 담은 배열 생성
const arr1 = Array.from({ length: 30000 }, () => Math.floor(Math.random() * 1000));

// getTime() : 1970-01-01 부터의 시간차를 ms 단위로 계산
const startTime1 = new Date().getTime();
countingSort(arr1);
const endTime1 = new Date().getTime();

// 시간차 출력
console.log(`계수 정렬 소요 시간 1 : ${endTime1 - startTime1}ms`);



/* 2) 이미 정렬된 배열에 대한 계수 정렬의 수행시간 측정 */
// 0부터 999까지의 정수 30,000개를 담은 배열 생성
const arr2 = Array.from({ length: 30000 }, () => 7);

// getTime() : 1970-01-01 부터의 시간차를 ms 단위로 계산
const startTime2 = new Date().getTime();
countingSort(arr2);
const endTime2 = new Date().getTime();

// 시간차 출력
console.log(`계수 정렬 소요 시간 2 : ${endTime2 - startTime2}ms`);