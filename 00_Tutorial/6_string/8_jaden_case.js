// https://school.programmers.co.kr/learn/courses/30/lessons/12951 (JadenCase)

function solution(str) {
    return str.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

console.log(solution("3people unFollowed me")); // "3people Unfollowed Me"
console.log(solution("for the last week")); // "For The Last Week"
