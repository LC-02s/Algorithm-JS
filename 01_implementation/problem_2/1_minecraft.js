// https://www.acmicpc.net/problem/18111 (마인크래프트)

/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
    .map(str => str.trim().split(' ').map(Number));
*/

const input = `3 4 1
64 64 64 64
64 64 64 64
64 64 64 63`.split('\n').map(str => str.trim().split(' ').map(Number));

const [ [ n, m, b ], ...blocksArr ] = input;
const blocks = blocksArr.reduce((blocks, array) => blocks.concat(array), []);

const blocksConutMap = blocks
    .reduce((map, height) => map.set(height, map.get(height) + 1 || 1), new Map());

const maxHeight = Math.max(...blocks);
const minHeight = Math.min(...blocks);

const [ resultTime, resultHeight ] = Array
    .from({ length: maxHeight - minHeight + 1 }, (_, idx) => maxHeight - idx)
    .reduce(([ time, floor ], thisFloor) => {
        let inventory = b;
        const thisTime = [ ...blocksConutMap ].reduce((time, [ block, count ]) => {
            if (block >= thisFloor) { 
                inventory += count * (block - thisFloor); 
                return time + (count * (block - thisFloor) * 2); 
            } else { 
                inventory -= count * (thisFloor - block); 
                return time + (count * (thisFloor - block)); 
            } 
        }, 0);

        if (inventory >= 0 && time > thisTime) return [ thisTime, thisFloor ];
        else return [ time, floor ];

    }, [ Infinity, 0 ]);

console.log(`${resultTime} ${resultHeight}`);