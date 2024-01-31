// https://school.programmers.co.kr/learn/courses/30/lessons/150370 (개인정보 수집 유효기간)
// 2023 KAKAO BLIND RECRUITMENT

// 문제에서 정의하는 n달 뒤가 실제 날짜를 반영하지 않는 값이라서 Date 사용 X
// 1년 12개월, 1달 28일

function solution(today, terms, privacies) {

    const termsMap = new Map( terms.map((term) => {
        const [ type, period ] = term.split(' ');
        return [ type, Number(period) ];
    }) );

    const targetDate = privacies.map((privacy) => privacy.split(' '))
        .map(([ date, type ]) => {
            let [ prvcYear, prvcMonth, prvcDay ] = date.split('.').map(Number);
            prvcMonth += termsMap.get(type);
            if ((prvcDay + 27) % 28) { prvcDay = (prvcDay + 27) % 28 } 
            else { prvcMonth -= 1; prvcDay = 28 }
            while (prvcMonth > 12) { prvcYear += 1; prvcMonth -= 12 };

            return +`${prvcYear}${String(prvcMonth).padStart(2, '0')}${String(prvcDay).padStart(2, '0')}`;
        });
    
    const thisDate = Number(today.trim().split('.').join(''));
    
    const targetPrivacyIndex = targetDate
        .reduce((resultArr, date, idx) => {
            if (date < thisDate) resultArr.push(idx + 1);
            return resultArr;
        }, []);

    return targetPrivacyIndex;
}

console.log(solution("2022.05.19", ["A 6", "B 12", "C 3"], ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]));
// [ 1, 3 ]
console.log(solution("2020.01.01", ["Z 3", "D 5"], ["2019.01.01 D", "2019.11.15 Z", "2019.08.02 D", "2019.07.01 D", "2018.12.28 Z"]));
// [ 1, 4, 5 ]