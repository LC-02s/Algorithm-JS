// https://school.programmers.co.kr/learn/courses/30/lessons/92341 (주차 요금 계산)
// 2022 KAKAO BLIND RECRUITMENT

// INPUT CASE #1
// - fees
//  > [180, 5000, 10, 600]
// - records
//  > ["05:34 5961 IN", "06:00 0000 IN", "06:34 0000 OUT", "07:59 5961 OUT", "07:59 0148 IN", "18:59 0000 IN", "19:09 0148 OUT", "22:59 5961 IN", "23:00 5961 OUT"]
// - result
//  > [14600, 34400, 5000]


function solution(fees, records) {
    const [ defaultTime, defaultFee, timeUnit, feeUnit  ] = fees.map(Number);
    
    const sortedRecords = records.map((detail) => {
            const [ timeStamp, carNum, state ] = detail.split(' ');
            return ({ timeStamp: timeStamp.split(':').map(Number), carNum: Number(carNum), state: (state == 'IN' ? 1 : 0) });
        })
        .sort((a, b) => a.carNum - b.carNum)
        .reduce((obj, { timeStamp, carNum, state }) => {
            obj[carNum] = obj[carNum] ? ([ ...obj[carNum], [ timeStamp, state ] ]) : ([[ timeStamp, state ]]);
            return obj;
        }, ({}));

    const parkingTimes = Object.keys(sortedRecords)
        .map((key) => {
            return sortedRecords[key]
                .reduce((totalTime, [ [ hh, mm ], state ], idx) => {
                    const hToM = hh * 60 + mm;
                    if (idx == sortedRecords[key].length - 1 && state) return totalTime + (1439 - hToM);
                    return state ? totalTime - hToM : totalTime + hToM;
                }, 0)
        });
    
    const computedFees = parkingTimes.map(pTime => {
        if (pTime < defaultTime) return defaultFee;
        return defaultFee + Math.ceil((pTime - defaultTime) / timeUnit) * feeUnit;
    });

    return computedFees;
}

console.log(solution([180, 5000, 10, 600], ["05:34 5961 IN", "06:00 0000 IN", "06:34 0000 OUT", "07:59 5961 OUT", "07:59 0148 IN", "18:59 0000 IN", "19:09 0148 OUT", "22:59 5961 IN", "23:00 5961 OUT"]));
// [14600, 34400, 5000]
console.log(solution([120, 0, 60, 591], ["16:00 3961 IN", "16:00 0202 IN", "18:00 3961 OUT", "18:00 0202 OUT", "23:58 3961 IN"]));
// [0, 591]
console.log(solution([1, 461, 1, 10], ["00:00 1234 IN"]));
// [14841]