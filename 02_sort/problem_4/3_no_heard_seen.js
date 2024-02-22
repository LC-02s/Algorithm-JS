// https://www.acmicpc.net/problem/1764 (듣보잡)

/*
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(str => str.trim());
*/

const input = `3 4
ohhenrie
charlie
baesangwook
obama
baesangwook
ohhenrie
clinton`.trim().split('\n').map(str => str.trim());

const [ condition, ...names ] = input.map(str => str.trim());
const [ n, m ] = condition.split(' ').map(Number);

const neverHeard = names.slice(0, n)
    .reduce((set, name) => set.add(name), new Set());

const neverHeardAndSeen = names.slice(n, names.length).sort()
    .reduce((arr, name) => neverHeard.has(name) ? (arr.push(name), arr) : arr, []);

console.log(neverHeardAndSeen.length);
console.log(neverHeardAndSeen.join('\n'));