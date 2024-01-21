// https://www.acmicpc.net/problem/2480 (주사위 세개)

/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n')[0].split(' ').map(Number);

const [ a, b, c ] = input;

if (a === b && b === c) console.log(10000 + a * 1000);
else if (a === b) console.log(1000 + a * 100);
else if (a === c) console.log(1000 + a * 100);
else if (b === c) console.log(1000 + b * 100);
else console.log(Math.max(a, b, c) * 100);
*/

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line) => {
    input = line.split(' ').map(Number);
}).on('close', () => {    
    const [ a, b, c ] = input;

    if (a === b && b === c) console.log(10000 + a * 1000);
    else if (a === b) console.log(1000 + a * 100);
    else if (a === c) console.log(1000 + a * 100);
    else if (b === c) console.log(1000 + b * 100);
    else console.log(Math.max(a, b, c) * 100);

    process.exit();
});
