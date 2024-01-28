// https://www.acmicpc.net/problem/17609 (회문)

/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

// 0 : 회문 | 1 : 유사회문 | 2 : 둘 다 아님

const input = `7
abba
summuus
xabba
xabbay
comcom
comwwmoc
comwwtmoc`.trim().split('\n');
const [ , ...strArr ] = input;
const checkPalindrome = (str) => str == str.split('').reverse().join('');

for (const str of strArr) {
    if (checkPalindrome(str)) console.log(0); // 처리할 문자열이 회문인 경우
    else {
        const n = str.length; // 문자열의 길이
        let found = false;
        for (let i = 0; i < parseInt(n / 2); i += 1) {
            if (str[i] != str[n - (i + 1)]) { // 대칭이 아닌 문자를 찾은 경우
                // 앞쪽에 있는 해당 원소를 제거해 본 뒤 재검사
                if (checkPalindrome(str.slice(0, i) + str.slice(i + 1, n))) found = true;
                // 뒤쪽에 있는 해당 원소를 제거해 본 뒤 재검사
                if (checkPalindrome(str.slice(0, n - (i + 1)) + str.slice(n - i, n))) found = true;
                break;
            }
        }
        console.log(found ? 1 : 2);
    }
}