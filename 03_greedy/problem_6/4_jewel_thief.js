// https://www.acmicpc.net/problem/1202 (보석 도둑)

/*
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
*/

function PriorityQueue(comparator) {
    this._comparator = comparator || PriorityQueue.DEFAULT_COMPARATOR;
    this._elements = [];
}
PriorityQueue.DEFAULT_COMPARATOR = function(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a - b;
    } else {
        a = a.toString();
        b = b.toString();

        if (a == b) return 0;

        return (a > b) ? 1 : -1;
    }
};
PriorityQueue.prototype.isEmpty = function() {
    return this.size() === 0;
};
PriorityQueue.prototype.peek = function() {
    if (this.isEmpty()) throw new Error('PriorityQueue is empty');

    return this._elements[0];
};
PriorityQueue.prototype.deq = function() {
    var first = this.peek();
    var last = this._elements.pop();
    var size = this.size();
  
    if (size === 0) return first;
  
    this._elements[0] = last;
    var current = 0;
  
    while (current < size) {
        var largest = current;
        var left = (2 * current) + 1;
        var right = (2 * current) + 2;

        if (left < size && this._compare(left, largest) >= 0) {
            largest = left;
        }

        if (right < size && this._compare(right, largest) >= 0) {
            largest = right;
        }

        if (largest === current) break;

        this._swap(largest, current);
        current = largest;
    }
  
    return first;
};
PriorityQueue.prototype.enq = function(element) {
    var size = this._elements.push(element);
    var current = size - 1;

    while (current > 0) {
        var parent = Math.floor((current - 1) / 2);

        if (this._compare(current, parent) <= 0) break;

        this._swap(parent, current);
        current = parent;
    }

    return size;
};
PriorityQueue.prototype.size = function() {
    return this._elements.length;
};
PriorityQueue.prototype.forEach = function(fn) {
    return this._elements.forEach(fn);
};
PriorityQueue.prototype._compare = function(a, b) {
    return this._comparator(this._elements[a], this._elements[b]);
};
PriorityQueue.prototype._swap = function(a, b) {
    var aux = this._elements[a];
    this._elements[a] = this._elements[b];
    this._elements[b] = aux;
};

// 1100
// `4 4
// 1 100
// 2 200
// 13 300
// 10 500
// 10
// 10
// 10
// 14`

// 36
// `3 3
// 20 12
// 0 20
// 16 16
// 17
// 14
// 7`

// 183
// `9 5
// 4 5
// 4 9
// 4 10
// 8 55
// 14 20
// 9 15
// 8 55
// 8 5
// 11 54
// 10
// 5
// 4
// 15
// 20`

const input = `9 5
4 5
4 9
4 10
8 55
14 20
9 15
8 55
8 5
11 54
10
5
4
15
20`.trim().split('\n');

const [ limit, ...inputStrArr ] = input.map(str => str.trim());
const [ n, k ] = limit.split(' ').map(Number);

const possibleJemsPrice = new PriorityQueue((a, b) => a.jemsPrice - b.jemsPrice);

const jems = inputStrArr.splice(0, n)
    .map(str => str.split(' ').map(Number))
    .sort(([weightA,], [weightB,]) => weightA - weightB);

const bags = inputStrArr.map(Number).sort((a, b) => a - b);

let keepedJemIndex = 0;
const possibleMaxPrice = bags.reduce((price, bagsWeight) => {
    for (let i = keepedJemIndex; i < jems.length; i += 1) {
        const [ jemsWeight, jemsPrice ] = jems[i];
        if (jemsWeight <= bagsWeight) {
            possibleJemsPrice.enq({ jemsWeight, jemsPrice }); 
            keepedJemIndex += 1;
        }
        else break;
    }

    if (!possibleJemsPrice.isEmpty()) {
        const max = possibleJemsPrice.deq();
        return price + max.jemsPrice;
    }
    else return price;
}, 0);

console.log(possibleMaxPrice);