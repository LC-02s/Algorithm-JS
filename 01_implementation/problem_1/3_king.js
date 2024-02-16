// https://www.acmicpc.net/problem/1063 (킹)

/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = `A8 B7 18
RB
RB
RB
RB
RB
RB
RB
RB
RB
RB
RB
RB
RB
RB
RB
RB
RB
RB`.split('\n');

const [ condition, ...moved ] = input;
const [ intialKing, initialStone, n ] = condition.trim().split(' ');

const moving = {
    R:  [ 1, 0 ], L:  [ -1, 0 ], B:  [ 0, -1 ], T:  [  0,  1 ],
    RT: [ 1, 1 ], LT: [ -1, 1 ], RB: [ 1, -1 ], LB: [ -1, -1 ],
};

const boardX = 'ABCDEFGH'.split('').reduce((obj, alphabet, idx) => (obj[alphabet] = idx + 1, obj), {});

const coordinate = (object) => ([ boardX[object[0]], Number(object[1]) ]);
const computedCoordinate = (prev, target) => ([ prev[0] + target[0], prev[1] + target[1] ]);

const isInner = (point) => (0 < point[0] && point[0] < 9 && 0 < point[1] && point[1] < 9);
const isSame = (pointA, pointB) => pointA[0] === pointB[0] && pointA[1] === pointB[1];

const initialPoint = [ coordinate(intialKing.trim()), coordinate(initialStone.trim()) ];
const lastPoint = moved.reduce(([ king, stone ], move) => {
    const targetMove = moving[move];
    const currentKing = computedCoordinate(king, targetMove);

    if (isInner(currentKing)) {
        if (isSame(currentKing, stone)) {
            const currentStone = computedCoordinate(stone, targetMove);
            if (isInner(currentStone)) return [ currentKing, currentStone ];
        } 
        else return [ currentKing, stone ];
    }
    return [ king, stone ];

}, initialPoint);

const output = (point) => Object.keys(boardX)[point[0] - 1] + point[1];
console.log(lastPoint.map(output).join('\n'));