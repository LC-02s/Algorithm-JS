// https://www.acmicpc.net/problem/1141 (접두사)

/*
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = `6
hello
hi
h
run
rerun
running`.trim().split('\n');

const [ n, ...words ] = input;
const count = words.sort().reduce((cnt, word, i, words) => {
    const testPrefix = words[i + 1]?.trim().substring(0, word.length) ?? '';
    return testPrefix === word.trim() ? cnt - 1 : cnt;
}, +n);

console.log(count);


// 단어 배열을 사전순으로 정렬 시 X의 접두사는 X의 바로 뒤에 위치함