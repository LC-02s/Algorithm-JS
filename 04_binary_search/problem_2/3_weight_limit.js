// https://www.acmicpc.net/problem/1939 (중량제한)

/*
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = `3 3
1 2 2
3 1 3
2 3 2
1 3`.trim().split('\n');

const [ [ n, m ], ...infos ] = input.map(str => str.trim().split(' ').map(Number));
const [ targetFrom, targetTo ] = infos.pop();

const [ bridges, maxWeight ] = infos.reduce(
    ([ bridges, maxWeight ], [ from, to, weight ]) => {
        bridges[from].push([ to, weight ]);
        bridges[to].push([ from, weight ]);
        return [ bridges, (weight > maxWeight ? weight : maxWeight) ];
    }, 
    [ Array.from({ length: n + 1 }, () => []), 0 ]
);

const bfs = (testWeight) => {
    const visited = new Array(n + 1).fill(false);
    
    const queue = [];
    let headIndex = 0;

    queue.push(targetFrom);
    visited[targetFrom] = true;

    while (headIndex < queue.length) {
        const city = queue[headIndex];

        if (city === targetTo) return true;
        bridges[city].forEach(([ city, weight ]) => {
            if (!visited[city] && testWeight <= weight) {
                visited[city] = true;
                queue.push(city);
            }
        });
        headIndex += 1;
    }
    return false;
}

let start = 0;
let end = maxWeight;

while (start <= end) {
    const mid = parseInt((start + end) / 2);
    bfs(mid) ? (start = mid + 1) : (end = mid - 1);
}

console.log(end);