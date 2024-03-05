// https://www.acmicpc.net/problem/9012 (괄호)

/*
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = `6
(())())
(((()())()
(()())((()))
((()()(()))(((())))()
()()()()(()()())()
(()((())()(`.trim().split('\n');

const [ , ...brackets ] = input.map(str => str.trim().split(''));

const result = brackets.reduce((result, brackets) => {
    const stack = [];
    for (const bracket of brackets) {
        if (bracket === '(') stack.push(bracket);
        else {
            if (stack.length === 0) { stack.push(bracket); break }
            stack.pop();
        }
    };

    return (result.push(stack.length === 0 ? 'YES' : 'NO'), result);
}, []);

console.log(result.join('\n'));