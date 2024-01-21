// https://www.acmicpc.net/problem/9498 (시험 성적)

/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

function gradeCompute(grade) {
    if (grade >= 90) {
        return 'A'
    } else if (grade >= 80) {
        return 'B'
    } else if (grade >= 80) {
        return 'B'
    } else if (grade >= 70) {
        return 'C'
    } else if (grade >= 60) {
        return 'D'
    } else {
        return 'F'
    }
}

console.log(gradeCompute(parseInt(input[0])));
*/

/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

data = Number(input[0]);

function check(a) {
    if (90 <= a && a <= 100) console.log('A');
    else if (80 <= a && a <= 89) console.log('B');
    else if (70 <= a && a <= 79) console.log('C');
    else if (60 <= a && a <= 69) console.log('D');
    else console.log('F');
}
check(data);
*/

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function gradeCompute(grade) {
    if (grade >= 90) {
        return 'A'
    } else if (grade >= 80) {
        return 'B'
    } else if (grade >= 80) {
        return 'B'
    } else if (grade >= 70) {
        return 'C'
    } else if (grade >= 60) {
        return 'D'
    } else {
        return 'F'
    }
}

let input = '';

rl.on('line', (line) => {
    input = line;
}).on('close', () => {
    console.log(gradeCompute(Number(input)));
    process.exit();
});
