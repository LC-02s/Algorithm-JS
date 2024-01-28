// https://www.acmicpc.net/problem/1493 (박스 채우기)

/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/
const input = `4 4 8
3
0 10
1 10
2 1`.trim().split('\n');

const [ boxStr, _n, ...cubeStrArr ] = input;
// 숫자 x 보다 작거나 같으면서 가장 가까운 2의 제곱수를 반환하는 함수
const nearestSquare = (x) => {
    let squareNum = 1;
    while ((2 ** squareNum) <= Number(x)) squareNum += 1;
    return squareNum - 1;
}
const multiple = (a, b) => a * b;
const boxSizeArr = boxStr.trim().split(' ').map(Number);
const [ length, width, height ] = boxSizeArr;
const boxSize = boxSizeArr.reduce(multiple);
const targetSize = Math.min(...boxSizeArr.map(nearestSquare));

const cubes = new Array(20).fill(0);
cubeStrArr.forEach(str => {
    const [ squareNum, cubeLength ] =  str.split(' ').map(Number);
    cubes[squareNum] = cubeLength;
})

let countCube = 0;
let usedCube = 0;

for (let i = targetSize; i >= 0; i -= 1) {
    usedCube *= 8; // 채널, 너비, 높이가 2씩 줄었으므로 큐브의 개수는 8배 증가
    const currentCubeSize = (2 ** i); // 현재의 정육면체 큐브 사이즈
    const requiredCube = boxSizeArr // 채워 넣어야 할 큐브의 개수 계산
        .map(boxSize => parseInt(boxSize / currentCubeSize))
        .reduce(multiple) - usedCube;
    const usageCubes = Math.min(requiredCube, cubes[i]); // 해당 단계에서 넣을 수 있는 큐브의 개수
    countCube += usageCubes;
    usedCube += usageCubes;
}

console.log(usedCube == boxSize ? countCube : -1);