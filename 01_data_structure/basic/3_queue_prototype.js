
function Queue() {
    this.queue = {};
    this.head = 0;
    this.tail = 0;
}

Queue.prototype.enq = function(el) {
    this.queue[this.tail] = el;
    this.tail += 1;
}

Queue.prototype.deq = function() {
    const target = this.queue[this.head];
    delete this.queue[this.head];
    this.head += 1;
    return target;
}

Queue.prototype.peek = function() {
    return this.queue[this.head];
}

Queue.prototype.getLength = function() {
    return this.tail - this.head;
}