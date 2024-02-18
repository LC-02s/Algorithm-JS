// 삽입 정렬 함수
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i += 1) {
        for (let j = i; j > 0; j -= 1) {
            // 인덱스 j부터 1까지 1식 감소하며 반복
            if (arr[j] < arr[j - 1]) {
                // 한 칸씩 왼쪽으로 이동 (swap)
                const temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
            } else {
                // 자기보다 작은 데이터를 만나면 그 위치에서 멈춤
                break;
            }
        }
    }
}


/* 1) 삽입 정렬의 수행시간 측정 */
// 0부터 999까지의 정수 30,000개를 담은 배열 생성
const arr1 = Array.from({ length: 30000 }, () => Math.floor(Math.random() * 1000));

// getTime() : 1970-01-01 부터의 시간차를 ms 단위로 계산
const startTime1 = new Date().getTime();
insertionSort(arr1);
const endTime1 = new Date().getTime();

// 시간차 출력
console.log(`삽입 정렬 소요 시간 1 : ${endTime1 - startTime1}ms`);



/* 2) 이미 정렬된 배열에 대한 삽입 정렬의 수행시간 측정 */
// 0부터 999까지의 정수 30,000개를 담은 배열 생성
const arr2 = Array.from({ length: 30000 }, () => 7);

// getTime() : 1970-01-01 부터의 시간차를 ms 단위로 계산
const startTime2 = new Date().getTime();
insertionSort(arr2);
const endTime2 = new Date().getTime();

// 시간차 출력
console.log(`삽입 정렬 소요 시간 2 : ${endTime2 - startTime2}ms`);