// https://school.programmers.co.kr/learn/courses/30/lessons/178871 (달리기 경주)

function solution(players, callings) {

    const playerRank = players.reduce((map, player, idx) => (map.set(player, idx), map), new Map());

    callings.forEach((call) => {
        const calledPlayerIdx = playerRank.get(call); // 불린 선수 순위
        const targetPlayer = players[calledPlayerIdx - 1]; // 제낄 선수 이름
        
        // 자리 교체
        players[calledPlayerIdx] = targetPlayer;
        players[calledPlayerIdx - 1] = call;

        // 순위 업데이트
        playerRank.set(call, calledPlayerIdx - 1);
        playerRank.set(targetPlayer, calledPlayerIdx);
    });

    return players;
}

console.log(solution(["mumu", "soe", "poe", "kai", "mine"], ["kai", "kai", "mine", "mine"]));
// ["mumu", "kai", "mine", "soe", "poe"]