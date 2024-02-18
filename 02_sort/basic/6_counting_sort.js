
function countingSort(arr) {
    // 모든 배열을 순회하며 원소: 계수 형태의 값을 갖는 객체 생성
    const counting = arr.reduce((obj, num) => (obj[num] = (obj[num] + 1 || 1), obj), {});

    const newArray = [];
    // 만든 객체를 순회하며 새로운 배열에 입력
    Object.entries(counting).forEach(([ num, count ]) => {
        for (let i = 0; i < count; i += 1) newArray.push(+num);
    });
    return newArray;
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