/* 01. 기본 출력 */
const result01 = 'test';

console.log(`${result01}`); // 템플릿 리터럴 Template Literals


/* 02. 기본 사칙 연산 */
const a02 = 7;
const b02 = 3;

console.log(a02 + b02);
console.log(a02 - b02);
console.log(a02 * b02);
console.log(parseInt(a02 / b02)); // 몫만 남기기
console.log(a02 % b02); // 나머지 연산


/* 03. 코테용 빠른 문자열 출력 */
let answer03 = '';

/*
console에 100만줄을 따로 출력하는 것 보다
반복문으로 한꺼번에 저장해서 출력하는 것이 대개 더 빠름
*/
for (let i = 0; i <= 2; i +=1) {
    answer03 += i + '\n'; // 개행문자를 포함한 문자열로 변환하여 기록
}
console.log(answer03);


/* 04. fs 모듈 (파일시스템) */
/* readline 모듈보다 조금 더 빠름 */
const fs04 = require('fs');
// const input04 = fs04.readFileSync('input.txt', {encoding: 'utf-8', flag: 'r'});
// const input04 = fs04.readFileSync('input.txt').toString();
const input04 = fs04.readFileSync('input.txt').toString().split('\n');

// console.log(input04);
console.log(input04, input04[1].split(' '));


/* 05. Readline 모듈 */
/* 간혹 특정 시스템이나 문제에 제한적으로 fs 모듈을 막는 경우가 있음 (보안 등 이슈) */
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
const input05 = [];

rl.on('line', (line) => {
    // 콘솔 입력 창에서 줄바꿈(Enter)를 입력할 때마다 호출
    input05.push(line);
}).on('close', () => {
    // 콘솔 입력 창에서 Ctrl + C 혹은 Ctrl + D를 입력하면 호출 (입력의 종료)
    console.log(input05);
    process.exit();
});

/* 06. JavaScript 문법 - 조건문 */
/**
 * condition: 참 혹은 거짓을 반환하는 조건식
 * statement1 : condition1이 참일 때 실행되는 구문
 * statement2 : condition1이 거짓이고, condition2가 참일 때 실행되는 구문
 * statement3 : condition1과 condition2가 거짓이고 condition3가 참일 때 실행되는 구문
 * statementN : 앞의 모든 조건문이 거짓일 때 실행되는 구문
 * 
 * if (condition1) {
 *  statement1
 * } else if (condition2) {
 *  statement2
 * } else if (condition3) {
 *  statement3
 * } else {
 *  statementN
 * }
 */


/* 07. JavaScript 문법 - 반복문 (for) */
/**
 * - 초기문이 존재한다면 초기문이 먼저 실행
 * - 조건문이 참이라면 블록 내부 코드가 실행되고, 거짓이면 반복문이 종료됨
 * - 블록 내부 코드가 실행된 뒤에 증감문이 실행됨
 * 
 * for (초기문; 조건문; 증감문) {
 *  statement
 * }
 */

// 1부터 100까지의 합 계산
let summary07 = 0;

for (let i = 1; i <= 100; i += 1) {
    summary07 += i;
}
console.log(summary07);

/* 07. JavaScript 문법 - 반복문 (while) */
/**
 * - while문은 조건문이 참일 때 실행
 * - 블록 내부의 코드가 실행되기 전에 참 혹은 거짓을 판단함
 * 
 * while (condition) {
 *  statement
 * }
 */


/* 08. JavaScirpt 문법 - Number와 String 형변환 */
const num08 = 789;
const str08 = "789";

console.log(Number(str08), String(num08));


/* 09. JavaScript 문법 - Array.prototype.reduce() */
/**
 * reduce() 메서드는 배열의 각 요소에 대해 reducer 함수를 실행한 뒤에 하나의 결과를 반환함
 * reducer의 형태 : (accumulator, currentValue) => (반환값)
 *  - 배열의 각 원소를 하나씩 확인하며, 각 원소는 currentValue에 할당됨
 *  - 반환값은 그 이후의 원소에 대하여 accumulator에 저장됨
 * 
 *  reduce 매서드는 4(+1)개의 인자값을 가짐
 *   1. 누산기 (acc)
 *   2. 현재 값 (cur)
 *   3. 현재 인덱스 (idx)
 *   4. 원본 배열 (src)
 *   ** 초기 값 (init) // 빈 배열에서 reduce 호출 시 에러 발생
 */

const data09 = [5, 2, 9, 8, 4];

// minValue 구하기
const minValue09 = data09.reduce((a, b) => Math.min(a, b));

// 원소의 합계 구하기
const summary09 = data09.reduce((a, b) => a + b);

console.log('\n', minValue09, summary09, '\n\n');

/*
const test09 = data09.reduce((a, b, c, d) => console.log(a, b, c, d), 10);

초기값 X)
5         2 1 [ 5, 2, 9, 8, 4 ]
undefined 9 2 [ 5, 2, 9, 8, 4 ]
undefined 8 3 [ 5, 2, 9, 8, 4 ]
undefined 4 4 [ 5, 2, 9, 8, 4 ]

초기값 O)
10        5 0 [ 5, 2, 9, 8, 4 ]
undefined 2 1 [ 5, 2, 9, 8, 4 ]
undefined 9 2 [ 5, 2, 9, 8, 4 ]
undefined 8 3 [ 5, 2, 9, 8, 4 ]
undefined 4 4 [ 5, 2, 9, 8, 4 ]
*/


/* 10. JavaScript 문법 - 배열 초기화 방법 */
/*
직접 값을 설정하여 초기화
const arr10_1 = [8, 1, 4, 5, 7];

길이가 5이고 모든 원소의 값이 0인 배열 초기화
const arr10_2 = new Array(5).fill(0);
*/


/* 11. JavaScript 문법 - 집합 자료형 */
const mySet11 = new Set(); // 집합 객체 생성

// 여러 개의 원소 삽입 - 특) 중복 데이터 없음
mySet11.add(3);
mySet11.add(5);
mySet11.add(7);
mySet11.add(3);

console.log(`원소의 개수: ${mySet11.size}\n원소 7을 포함하고 있는가?: ${mySet11.has(7)}`);

// 원소 5 제거
mySet11.delete(5);

// 원소를 하나씩 출력
for (let item of mySet11) console.log(item);


/* 12. JavaScript 문법 - 소수점 아래 특정 자리에서 반올림 */
// 특정 실수에 대하여 toFixed()를 이용해 소수점 아래 둘째 자리까지 출력
const float12 = 132.456;

console.log(float12.toFixed(2));


/* 13. 이스케이프 시퀀스 (Escape Sequence) */
/**
 * 시퀀스 | 문자
 * \t   | 탭
 * \\   | 역 슬래시
 * \"   | 쌍 따옴표
 * \'   | 홑 따옴표
 */
console.log("그는 \"비범함\"을 보였다");