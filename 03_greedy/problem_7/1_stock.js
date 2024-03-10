// https://www.acmicpc.net/problem/11501 (주식)

/*
const input = require('fs').readFileSync(0, 'utf-8')
    .toString().trim().split('\n')
    .map(str => str.trim().split(' ').map(Number));
*/

const input = `3
3
10 7 6
3
3 5 9
5
1 1 3 1 2`.trim().split('\n').map(str => str.trim().split(' ').map(Number));

const result = input
    .reduce((arr, target) => (target.length > 1 ? (arr.push(target), arr) : arr), [])
    .map((dailyPrice) => {
        const [ profit ] = dailyPrice.reverse().reduce(([ profit, max ], price) => {
            if (price > max) return [ profit, price ];
            if (price < max) return [ profit + max - price, max ];
            return [ profit, max ];
        }, [ 0, 0 ]);
        return profit;
    })
    .join('\n');

console.log(result);