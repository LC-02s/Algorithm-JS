// 버블 정렬 함수
function bubbleSort(arr) {
    for (let i = arr.length - 1; i > 0; i -= 1) {
        for (let j = 0; j < i; j += 1) {
            if (arr[j] < arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}


/* 1) 버블 정렬의 수행시간 측정 */
// 0부터 999까지의 정수 30,000개를 담은 배열 생성
const arr1 = Array.from({ length: 30000 }, () => Math.floor(Math.random() * 1000));

// getTime() : 1970-01-01 부터의 시간차를 ms 단위로 계산
const startTime1 = new Date().getTime();
bubbleSort(arr1);
const endTime1 = new Date().getTime();

// 시간차 출력
console.log(`버블 정렬 소요 시간 1 : ${endTime1 - startTime1}ms`);



/* 2) 이미 정렬된 배열에 대한 선택 정렬의 수행시간 측정 */
// 0부터 999까지의 정수 30,000개를 담은 배열 생성
const arr2 = Array.from({ length: 30000 }, () => 7);

// getTime() : 1970-01-01 부터의 시간차를 ms 단위로 계산
const startTime2 = new Date().getTime();
bubbleSort(arr2);
const endTime2 = new Date().getTime();

// 시간차 출력
console.log(`버블 정렬 소요 시간 2 : ${endTime2 - startTime2}ms`);