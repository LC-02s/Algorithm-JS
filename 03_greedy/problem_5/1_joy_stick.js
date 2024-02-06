// https://school.programmers.co.kr/learn/courses/30/lessons/42860 (조이스틱)

/*
조이스틱으로 알파벳 이름을 완성하세요. 맨 처음엔 A로만 이루어져 있습니다.
ex) 완성해야 하는 이름이 세 글자면 AAA, 네 글자면 AAAA

조이스틱을 각 방향으로 움직이면 아래와 같습니다.

▲ - 다음 알파벳
▼ - 이전 알파벳 (A에서 아래쪽으로 이동하면 Z로)
◀ - 커서를 왼쪽으로 이동 (첫 번째 위치에서 왼쪽으로 이동하면 마지막 문자에 커서)
▶ - 커서를 오른쪽으로 이동 (마지막 위치에서 오른쪽으로 이동하면 첫 번째 문자에 커서)

만들고자 하는 이름 name이 매개변수로 주어질 때, 이름에 대해 조이스틱 조작 횟수의 최솟값을 return 하도록 solution 함수를 만드세요.
*/

function solution(name) {
    const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        .split('')
        .reduce((map, alphabet, idx) => (map.set(alphabet, idx + 1)), new Map());

    const charSpacing = (char) => {
        // A에서 특정 문자로 가는 최소 입력
        const charIdx = alphabets.get(char);
        return Math.min(charIdx - 1, alphabets.size - charIdx + 1);
    }

    const targetName = name.split('').map(charSpacing);
    
    const [ minMove, count ] = targetName
        .reduce(([ minMove, count ], char, idx, name) => {
            let cursor = idx + 1;
            while (cursor < name.length && name[cursor] === 0) cursor += 1;
            
            return [
                Math.min(
                    minMove, // 정 방향
                    (idx * 2) + name.length - cursor, // 뒤로
                    idx + 2 * (name.length - cursor) // 뒤의 요소 먼저 입력
                ),
                count + char
            ]
        }, [ targetName.length - 1, 0 ]);

    return minMove + count;
}

console.log(solution('JEROEN')); // 56
console.log(solution('JAN')); // 23