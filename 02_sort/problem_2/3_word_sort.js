// https://www.acmicpc.net/problem/1181 (단어 정렬)

/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/
const input = `13
but
i
wont
hesitate
no
more
no
more
it
cannot
wait
im
yours`.trim().split('\n');

const [ , ...arr ] = input;
const oneArr = new Set(arr);

console.log([...oneArr].sort((a, b) => {
    if (a.length != b.length) return a.length - b.length;
    else {
        if (a < b) return -1;
        else if (a > b) return 1;
        else return 0;
    }
}).join('\n'));

// 메모리 : 19340KB, 시간 : 240ms
