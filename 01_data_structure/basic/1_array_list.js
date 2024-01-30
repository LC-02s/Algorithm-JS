// 빈 배열 생성
// const arr1 = []; // 동적 타이핑
const arr1 = new Array();

arr1.push(7);
arr1.push(8);
arr1.push(9);

arr1.forEach(console.log);



// 원하는 값을 직접 입력하여 초기화 (1차원 배열)
const arr2 = [0, 1, 2, 3, 4];
console.log(arr2);

// 하나의 값으로 초기화
const arr3 = Array.from({ length: 5 }, () => 7);
console.log(arr3);



// 크기가 N * M 인 2차원 배열 생성
const arr4 = Array.from(Array(n), () => new Array(m));
console.log(arr4);

// 원하는 값을 직접 입력하여 2차원 배열 초기화
const arr5 = [
	[0, 1, 2, 3],
	[4, 5, 6, 7],
	[8, 9, 10, 11]
];

// 반복문을 이용한 배열 초기화
const arr6 = new Array(3);
for (let i = 0; i < arr.length; i += 1) {
	arr6[i] = Array.from(
		{ length: 4 },
		(undefined, j) => i * 4 + j
	);
}
console.log(arr6);



// for in vs of
const arr7 = [5, 6, 7, 8, 9];
arr7.length = 8;
arr7[7] = 3;
arr7.push(1);

for (let x of arr7) console.log(x); // [ 5, 6, 7, 8, 9, undef, undef, 3, 1 ]

const str7 = 'asdf';
for (let x of str7) console.log(x);
// 출력 값 : 'a' 's' 'd' 'f'

// str7.forEach(console.log); // TypeError

const arr8 = [5, 6, 7, 8, 9];
arr8.length = 8;
arr8[7] = 3;
arr8.push(1);

for (let x in arr8) console.log(x, arr[x]); // [ 5, 6, 7, 8, 9, undef, undef, 3, 1 ]

const str8 = 'asdf';
for (let x in str8) console.log(x);
// 출력 값 : 0 1 2 3