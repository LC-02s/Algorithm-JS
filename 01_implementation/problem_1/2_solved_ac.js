// https://www.acmicpc.net/problem/18110 (solved.ac)

/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
*/

const input = `0`.split('\n').map(Number);

const [ n, ...survey ] = input;
const deleteTarget = Math.round(n * 0.15);

const targetSurvey = survey
  .sort((a, b) => a - b)
  .slice(deleteTarget, survey.length - deleteTarget);

const level = Math.round(targetSurvey.reduce((a, b) => a + b, 0) / targetSurvey.length);

console.log(level || 0);
