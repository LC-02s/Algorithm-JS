// https://school.programmers.co.kr/learn/courses/30/lessons/92334 (신고 결과 받기)
// 2022 KAKAO BLIND RECRUITMENT

/*
// 처음 풀이 (테스트 3 〉 통과 (863.33ms, 120MB))
function solution(id_list, report, k) {

    const organizedRecords = report
        .map((record) => record.split(' '))
        .reduce((obj, [ complainant, defendant ]) => {
            obj[complainant] = obj[complainant] ? ([ ...obj[complainant], defendant ]) : ([ defendant ]);
            return obj;
        }, ({}));

    const dedupedRecords = Object.keys(organizedRecords)
        .reduce((obj, user) => (obj[user] = [ ...new Set(organizedRecords[user]) ], obj), ({}));

    const usersReportCount = Object.keys(dedupedRecords)
        .reduce((obj, userKey) => {
            dedupedRecords[userKey].forEach((user) => obj[user] = obj[user] ? obj[user] + 1 : 1);
            return obj;
        }, ({}));

    const bannedUsers = Object.keys(usersReportCount)
        .reduce((arr, user) => {
            return usersReportCount[user] >= k ? [ ...arr, user ] : arr;
        }, ([]))
    
    const totalReports = id_list
        .reduce((obj, user) => {
            if (!dedupedRecords[user]) return (obj[user] = 0, obj);
            const count = dedupedRecords[user].reduce((cnt, bannedUser) => {
                return bannedUsers.filter(target => target == bannedUser).length ? cnt + 1 : cnt;
            }, 0);
            return (obj[user] = count, obj);
        }, ({}));
    
    const result = Object.keys(totalReports).map((key) => totalReports[key]);

    return result;
}
*/

// Map 자료형 사용 (테스트 3 〉 통과 (214.64ms, 99.4MB))
function solution(id_list, report, k) {

    const organizedRecords = [ ...new Set(report) ]
        .map((record) => record.split(' '))
    
    const bannedUsers = organizedRecords
        .reduce((map, [ , target ]) => {
            return (map.set(target, map.get(target) + 1 || 1), map);
        }, new Map());
    
    const usersReportCount = organizedRecords
        .reduce((map, [ user, reportedUser ]) => {
            return bannedUsers.get(reportedUser) >= k ? 
                (map.set(user, map.get(user) + 1 || 1), map) : map;
        }, new Map());

    return id_list.map(user => usersReportCount.get(user) ?? 0);
}

console.log(solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"], 2)); // [ 2, 1, 1, 0 ]
console.log(solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3)); // [ 0, 0 ]