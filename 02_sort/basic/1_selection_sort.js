// 선택 정렬 함수
function selectionSort(arr) {
	for (let i = 0; i < arr.length; i += 1) {
		let minIndex = i; // 가장 작은 원소의 인덱스
		for (let j = i + 1; j < arr.length; j += 1) {
				if (arr[minIndex] > arr[j]) minIndex = j;
		}
		// swap
		const temp = arr[i];
		arr[i] = arr[minIndex];
		arr[minIndex] = temp;
	}
}

// const array = [6, 7, 4, 1, 3, 9];
// selectionSort(array)
// console.log(array);



/* 1) 선택 정렬의 수행시간 측정 */
// 0부터 999까지의 정수 30,000개를 담은 배열 생성
const arr1 = Array.from({ length: 30000 }, () => Math.floor(Math.random() * 1000));

// getTime() : 1970-01-01 부터의 시간차를 ms 단위로 계산
const startTime1 = new Date().getTime();
selectionSort(arr1);
const endTime1 = new Date().getTime();

// 시간차 출력
console.log(`선택 정렬 소요 시간 1 : ${endTime1 - startTime1}ms`);



/* 2) 이미 정렬된 배열에 대한 선택 정렬의 수행시간 측정 */
// 0부터 999까지의 정수 30,000개를 담은 배열 생성
const arr2 = Array.from({ length: 30000 }, () => 7);

// getTime() : 1970-01-01 부터의 시간차를 ms 단위로 계산
const startTime2 = new Date().getTime();
selectionSort(arr2);
const endTime2 = new Date().getTime();

// 시간차 출력
console.log(`선택 정렬 소요 시간 2 : ${endTime2 - startTime2}ms`);