// https://school.programmers.co.kr/learn/courses/30/lessons/42883 (큰 수 만들기)

/*
function solution(number, k) {
    const stack = [];
    for (let i = 0; i < number.length; i += 1) {
        while (k > 0 && stack[stack.length - 1] < number[i]) {
            stack.pop();
            k--;
        }
        stack.push(number[i]);
    }
    stack.splice(stack.length - k, k);
    
    return stack.join('');
}
*/

function solution(number, k) {
    const maxArr = number
        .split('')
        .reduce((stack, num) => {
            while (k > 0 && stack[stack.length - 1] < num) { stack.pop(); k -= 1; }
            return (stack.push(num), stack);
        }, []);

    return maxArr.slice(0, maxArr.length - k).join('');
}

console.log(solution("1924", 2)); // 94
console.log(solution("1231234", 3)); // 3234
console.log(solution("4177252841", 4)); // 775841