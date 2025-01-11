/**
 * enqueue(element)
 * dequeue()
 * peek()
 * isEmpty()
 * size()
 */

// Basic Queue Implement

class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(element) {
    return this.queue.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Underflow, unable to dequeue!";
    }
    return this.queue.shift();
  }

  isEmpty() {
    return this.size() === 0;
  }

  front() {
    if (this.isEmpty()) {
      return "No element in the queue!";
    }
    return this.queue[0];
  }

  size() {
    return this.queue.length;
  }

  printQueue() {
    let qs = "";

    for (let i = 0; i < this.size(); i++) {
      qs += this.queue[i] + " ";
    }
    return qs;
  }
}

const myQueue = new Queue();

myQueue.enqueue(20);
myQueue.enqueue(33);
myQueue.enqueue(59);
myQueue.enqueue(85);
myQueue.enqueue(92);

myQueue.dequeue();

console.log(myQueue.size());
