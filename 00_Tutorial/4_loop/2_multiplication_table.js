// https://www.acmicpc.net/problem/2739 (구구단)

/*
const fs = require('fs');
const n = Number(fs.readFileSync('/dev/stdin').toString().split('\n')[0]);
for (let i = 1; i <= 9; i += 1) console.log(`${n} * ${i} = ${n * i}`);
*/

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = 0;

rl.on('line', (line) => {
    input = Number(line);
}).on('close', () => {    
    let total = '';
    for (let i = 1; i <= 9; i += 1) total += `${input} * ${i} = ${input * i}\n`;
    console.log(total);
    process.exit();
});
