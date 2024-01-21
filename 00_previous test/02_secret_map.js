// https://school.programmers.co.kr/learn/courses/30/lessons/17681 (비밀지도)
// 2018 KAKAO BLIND RECRUITMENT

function solution(n, arr1, arr2) {
    const map1 = arr1.map(el => el.toString(2).padStart(n, '0'));
    const result = arr2
        .map(el => el.toString(2).padStart(n, '0'))
        .map((bin, binIdx) => {
            return bin
                .split('')
                .map((str, strIdx) => {
                    return (str == '1' || map1[binIdx][strIdx] == '1') ? '#' : ' ';
                })
                .join('');
        })

    return result;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28])); // ["#####", "# # #", "### #", "#  ##", "#####"]
console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10])); // ["######", "###  #", "##  ##", " #### ", " #####", "### # "]